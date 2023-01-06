import { Request, Response } from "express"
import { noNameProvided } from "../../errors/unprocessableEntity";
import { internalServerError } from "../../errors/internalServerError";
import { Turma } from '../../class/models/Turma/Turma';
import { idGenerator } from '../../helperFunctions/idGenerator';
import { moduloAtual } from '../../class/models/Turma/moduloAtual';
import { TurmaDB } from '../../database/TurmaDB';

export const criaTurmas = async (req: Request, res: Response) => {
    try {
        const nome = req.body.nome

        if (!nome) {
            throw noNameProvided
        }

        const turma = new Turma(
            idGenerator(),
            nome,
            moduloAtual.Onboarding
        )

        const criadorDeTurmas = new TurmaDB()
        await criadorDeTurmas.criaTurma(turma)
        
        
        res.status(201).send({ message: "Turma criada com sucesso", item: turma })
    } catch (e: any) {
        switch (e.name) {
            case 'noNameProvided':
                res.status(e.code).send({code: e.code, message: e.message })
                break;
            default:
                res.status(internalServerError.code).send({code: internalServerError.code, message: internalServerError.message })
        }
    }
}