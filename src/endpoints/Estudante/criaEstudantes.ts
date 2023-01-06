import { ILinkHobbies } from './../../class/models/Estudante/LinkHobbies';
import { LinkHobbiesDB } from './../../database/LinkHobbiesDB';
import { IHobby } from './../../class/models/Estudante/Hobbies';
import { HobbyDB } from './../../database/HobbyDB';
import { EstudanteDB } from './../../database/EstudanteDB';
import { Request, Response } from "express"
import { noNameProvided, noEmailProvided, noBirthdateProvided } from "../../errors/unprocessableEntity";
import { Estudante } from '../../class/Estudante';
import { idGenerator } from '../../helperFunctions/idGenerator';
import { internalServerError } from "../../errors/internalServerError";
import { Pessoa } from '../../class/Pessoa';

export const criaEstudantes = async (req: Request, res: Response) => {
    try {
        const { nome, email, data_nasc, hobbies } = req.body

        let turmaId: number;

        if (!nome) {
            throw noNameProvided
        }

        if (!email) {
            throw noEmailProvided
        }

        if (!data_nasc) {
            throw noBirthdateProvided
        }

        const estudante = new Estudante(
            idGenerator(),
            nome,
            email,
            new Date(data_nasc),
            turmaId,
        )

        const criadorDeHobbies = new HobbyDB()

        if (hobbies.length) {
            hobbies.map(async (hobby: string) => {
                let idExiste = await criadorDeHobbies.pegaHobbyPorNome(hobby)
                console.log(idExiste)
                if (!idExiste.length) {
                    let item = {
                        id: idGenerator(),
                        nome_hobby: hobby
                    }
                    await criadorDeHobbies.criaHobby(item)

                    let link: ILinkHobbies = {
                        fk_hobby: item.id,
                        fk_estudante: estudante.id
                    }

                    const criadorDeLinks = new LinkHobbiesDB()
                    await criadorDeLinks.criaLinkEntreHobbies(link)
                }

                const criadorDeLinks = new LinkHobbiesDB()
                await criadorDeLinks.criaLinkEntreHobbies(idExiste.RowDataPacket)
            })
        }

        const criadorDeEstudante = new EstudanteDB()
        await criadorDeEstudante.criaEstudante(estudante)

        const criadorDeLinks = new LinkHobbiesDB()
        await


            res.status(201).send({ message: "Estudante criado com sucesso", item: estudante })
    } catch (e: any) {
        switch (e.name) {
            case 'noNameProvided':
                res.status(e.code).send({ code: e.code, message: e.message })
                break;
            case 'noEmailProvided':
                res.status(e.code).send({ code: e.code, message: e.message })
                break;
            case 'noBirthdateProvided':
                res.status(e.code).send({ code: e.code, message: e.message })
                break;
            default:
                res.status(internalServerError.code).send({ code: internalServerError.code, message: e.message })
        }
    }
}