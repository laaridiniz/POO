"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const divisao_1 = __importDefault(require("./divisao"));
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
const processamento_1 = __importDefault(require("./processamento"));
const soma_1 = __importDefault(require("./soma"));
const subtracao_1 = __importDefault(require("./subtracao"));
let calculinho = new soma_1.default(2, 2);
let calculinho2 = new subtracao_1.default(3, 2);
let calculinho3 = new multiplicacao_1.default(2, 2);
let calculinho4 = new divisao_1.default(3, 2);
let processinho = new processamento_1.default();
processinho.processar(calculinho);
processinho.processar(calculinho2);
processinho.processar(calculinho3);
processinho.processar(calculinho4);
