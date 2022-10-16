import Divisao from "./divisao";
import Multiplicacao from "./multiplicacao";
import Processamento from "./processamento";
import Soma from "./soma";
import Subtracao from "./subtracao";

let calculinho = new Soma(2,2)
let calculinho2 = new Subtracao(3,2)
let calculinho3 = new Multiplicacao(2,2)
let calculinho4 = new Divisao(3,2)

let processinho = new Processamento()
processinho.processar(calculinho)
processinho.processar(calculinho2)
processinho.processar(calculinho3)
processinho.processar(calculinho4)