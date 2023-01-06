import { moduloAtual } from './../class/models/Turma/moduloAtual';
import { ITurma, Turma } from "../class/models/Turma/Turma";
import { BaseDB } from "./BaseDB";

export class TurmaDB extends BaseDB {
    TABELA_NOME = "IWFS_Turma"

    public async criaTurma(item: Turma) {
        await super.criar(item)
    }

    public async pegaTurmas() {
        return super.pegar()
    }

    public async pegaTurmasPorId(id: number) {
        return super.pegarPorId(id)
    }

    public async atualizaModuloPorId(id: number, item: moduloAtual) {
        await super.atualizarPorId(id, item)
    }
}