import { moduloAtual } from './moduloAtual';

export interface ITurma {
    getId: () => number,
    setId: (newId: number) => void,
    getNome: () => string,
    setNome: (novoNome: string) => void,
    getModuloAtual: () => number,
    setModuloAtual: (novoModulo: moduloAtual) => void
}

export class Turma implements ITurma {
    constructor(private id: number, private nome: string, private modulo_atual: moduloAtual) { }

    public getId() {
        return this.id
    }

    public setId(newId: number) {
        this.id = newId
    }

    public getNome() {
        return this.nome
    }

    public setNome(novoNome: string) {
        this.nome = novoNome
    }

    public getModuloAtual() {
        return this.modulo_atual
    }

    public setModuloAtual(novoModulo: number) {
        this.modulo_atual = novoModulo;
    }
}