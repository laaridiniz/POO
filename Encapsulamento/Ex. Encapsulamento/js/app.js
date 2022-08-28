"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = __importDefault(require("./empresa"));
const funcionario_1 = __importDefault(require("./funcionario"));
const telefone_1 = __importDefault(require("./telefone"));
let empresa = new empresa_1.default("ABC LTDA", '123456');
let funcionario1 = new funcionario_1.default("Alice", '987987987');
let funcionario2 = new funcionario_1.default("Bernardo", '145236987');
let telefoninho = new telefone_1.default('12', '39393939', 'Alice');
let telefoninho2 = new telefone_1.default('11', '78541238', 'Bernardo');
empresa.obterFuncionario.push(funcionario1, funcionario2);
empresa.obterTelefones.push(telefoninho, telefoninho2);
empresa.obterFuncionario.forEach(f => {
    console.log(`nome: ${f.nome} CPF: ${f.cpf}`);
});
empresa.obterTelefones.forEach(t => {
    console.log(`ddd: ${t.ddd} numero: ${t.numero}`);
});
