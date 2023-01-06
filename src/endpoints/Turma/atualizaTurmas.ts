import { noModuleProvided } from './../../errors/unprocessableEntity';
import { internalServerError } from './../../errors/internalServerError';
import { methodNotAllowed } from './../../errors/methodNotAllowed';
import { Request, Response } from "express"
import { moduloAtual } from '../../class/models/Turma/moduloAtual';
import { TurmaDB } from '../../database/TurmaDB';
import { idNotFound } from '../../errors/notFound';

export const atualizaTurmas = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const novoModulo: moduloAtual = req.body.modulo

        if (!id) {
            throw methodNotAllowed
        }

        if (!novoModulo) {
            throw noModuleProvided
        }

        const atualizadorDeTurmas = new TurmaDB()

        const idExiste = await atualizadorDeTurmas.pegaTurmasPorId(id)

        if (!idExiste.length) {
            throw idNotFound
        }

        await atualizadorDeTurmas.atualizaModuloPorId(id, novoModulo)


        res.status(201).send({ message: "Turma atualizada com sucesso" })
    } catch (e: any) {
        switch (e.name) {
            case 'methodNotAllowed':
                res.status(e.code).send({ code: e.code, message: e.message })
                break;
            case 'noModuleProvided':
                res.status(e.code).send({ code: e.code, message: e.message })
                break;
            case 'idNotFound':
                res.status(e.code).send({ code: e.code, message: e.message })
                break;
            default:
                res.status(internalServerError.code).send({ code: internalServerError.code, message: internalServerError.message })
        }
    }
}