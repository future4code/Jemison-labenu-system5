import { IError } from "../class/models/Erros/IError";

export const noNameProvided:IError = {
    code: 422,
    name: 'noNameProvided',
    message: 'Desculpe. O campo "Nome" é obrigatório. Preencha nome e tente novamente.'
}

export const noModuleProvided:IError = {
    code: 422,
    name: 'noModuleProvided',
    message: 'Desculpe. O campo "Módulo" é obrigatório. Preencha Módulo e tente novamente.'
}

export const noEmailProvided:IError = {
    code: 422,
    name: 'noModuleProvided',
    message: 'Desculpe. O campo "Email" é obrigatório. Preencha email e tente novamente.'
}

export const noBirthdateProvided:IError = {
    code: 422,
    name: 'noModuleProvided',
    message: 'Desculpe. O campo "Data de Nascimento" é obrigatório. Preencha e tente novamente.'
}