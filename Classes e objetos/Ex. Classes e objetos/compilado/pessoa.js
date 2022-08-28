"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, cpf) {
        this.obterCpf = () => {
            return this.cpf;
        };
        this.nome = nome;
        this.cpf = cpf;
    }
}
exports.default = Pessoa;
