import { IError } from "../class/models/Erros/IError";

export const badRequest:IError = {
    code:400,
    name: 'badRequest',
    message:'Desculpe. Não foi possível retornar os resultados da sua busca. Verifique se houve erros de gramática ou sintaxe.'
}