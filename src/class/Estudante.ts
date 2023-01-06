import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa {
    constructor(public id: number, nome: string, email: string, data_nasc: Date, fk_turma: number) {
        super(id, nome, email, data_nasc, fk_turma)
    }
}