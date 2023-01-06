import { IError } from "../class/models/Erros/IError";

export const internalServerError:IError = {
    code: 500,
    name: 'internalServerError',
    message: '500 Internal Server Error'
}