export abstract class Pessoa {
    constructor(protected id: number, private nome: string, private email: string, private data_nasc: Date, private fk_turma: number) {
        this.id = id
        this.nome = nome
        this.email = email
        this.data_nasc = data_nasc
        this.fk_turma = fk_turma
    }
}