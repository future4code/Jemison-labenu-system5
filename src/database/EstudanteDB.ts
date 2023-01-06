import { Estudante } from './../class/Estudante';
import { BaseDB } from "./BaseDB";

export class EstudanteDB extends BaseDB {
    TABELA_NOME = "IWFS_Estudante"

    public async criaEstudante(item: Estudante) {
        await super.criar(item)
    }

    public async pegaEstudante() {
        return super.pegar()
    }

    public async pegaEstudantePorNome(nome: string) {
        return super.pegarPorNome(nome)
    }

    public async mudaEstudanteDeTurma(id: number, item: number) {
        await super.atualizarPorId(id, item)
    }
}