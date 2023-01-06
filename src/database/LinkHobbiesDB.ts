import { ILinkHobbies } from './../class/models/Estudante/LinkHobbies';
import { BaseDB } from "./BaseDB";

export class LinkHobbiesDB extends BaseDB {
    TABELA_NOME = "IWFS_link_hobbies"

    public async criaLinkEntreHobbies(item: ILinkHobbies) {
        await super.criar(item)
    }

    public async pegaLinkHobbies() {
        return super.pegar()
    }
}