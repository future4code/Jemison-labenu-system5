import { Pessoa } from "./Pessoa";

export class Docente extends Pessoa {
    constructor(id:number, nome:string, email:string, data_nasc: Date, turmaId: number, especialidades:string[]) {
        super(id, nome, email, data_nasc, turmaId)
    }
}