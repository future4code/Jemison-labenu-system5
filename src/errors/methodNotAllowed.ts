import { IError } from "../class/models/Erros/IError";

export const methodNotAllowed:IError = {
    code:405,
    name: 'methodNotAllowed',
    message:'Desculpe. Não foi possível retornar resultados com base no método que você escolheu. Verifique se o endpoint usado suporta o método usado.'
}