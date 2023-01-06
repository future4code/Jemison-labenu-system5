import { BaseDB } from "./BaseDB";
import { IHobby } from './../class/models/Estudante/Hobbies'

export class HobbyDB extends BaseDB {
    TABELA_NOME = "IWFS_Hobbies"

    public async criaHobby(item: IHobby) {
        await super.criar(item)
    }

    public async pegaHobbyPorNome(nome_hobby: string) {
        return super.pegarPorNome(nome_hobby)
    }
}