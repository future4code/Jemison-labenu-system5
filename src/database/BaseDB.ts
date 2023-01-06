import knex from "knex";
import dotenv from "dotenv"

dotenv.config()

export abstract class BaseDB {

    abstract TABELA_NOME: string;

    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
        },
    })

    protected async criar(item: any) {
        await BaseDB.connection(this.TABELA_NOME).insert(item)
    }

    protected async pegar() {
        const result = await BaseDB.connection(this.TABELA_NOME).select();
        return result;
    }

    protected async pegarPorId(id: number) {
        const result = await BaseDB.connection(this.TABELA_NOME).select().where({ id });
        return result;
    }

    protected async pegarPorNome(nome_hobby: string) {
        const result = await BaseDB.connection(this.TABELA_NOME).select().where({ nome_hobby });
        return result;
    }

    protected async atualizarPorId(id: number, nomeDoCampo: any) {
        await BaseDB.connection(this.TABELA_NOME).update({ nomeDoCampo }).where({ id })
    }
}