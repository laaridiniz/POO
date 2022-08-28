"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = __importDefault(require("./empresa"));
const telefone_1 = __importDefault(require("./telefone"));
let empresa = new empresa_1.default('Steam');
empresa.telefone.push(new telefone_1.default('12', '123456789'));
console.log(`ddd: ${empresa.telefone[0].ddd}`);
