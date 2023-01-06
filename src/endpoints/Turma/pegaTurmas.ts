import { moduloAtual } from './../../class/models/Turma/moduloAtual';
import { TurmaDB } from './../../database/TurmaDB';
import { Request, Response } from "express"
import { internalServerError } from '../../errors/internalServerError';



export const pegaTurmas = async (req: Request, res: Response) => {
    try {
        const pegadorTurmas = new TurmaDB()
        let result = await pegadorTurmas.pegaTurmas()

        if (req.query.status === 'on') {
            result = result.filter((turma) => turma.modulo_atual !== '0')
        }

        if (req.query.status === 'off') {
            result = result.filter((turma) => turma.modulo_atual === '0')
        }

        if (req.query.status && req.query.status !== 'on' && req.query.status !== 'off') {
            result = result.filter((turma) => turma.modulo_atual === req.query.status)
        }

        res.status(200).send({ Turmas: result })
    } catch (e: any) {
        switch (e.name) {
            default:
                res.status(internalServerError.code).send({ code: internalServerError.code, message: internalServerError.message })
        }
    }
}