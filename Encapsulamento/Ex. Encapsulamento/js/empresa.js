"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor(razaoSocial, cnpj) {
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.telefones = [];
        this.funcionario = [];
    }
    get obterCnpj() {
        return this.cnpj;
    }
    get obterFuncionario() {
        return this.funcionario;
    }
    get obterTelefones() {
        return this.telefones;
    }
}
exports.default = Empresa;
