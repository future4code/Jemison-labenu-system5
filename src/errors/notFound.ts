import { IError } from "../class/models/Erros/IError";

export const idNotFound:IError = {
    code:400,
    name: 'idNotFound',
    message:'Desculpe. Não é possível mudar o módulo de uma turma que não existe. Verifique o ID buscado.'
}