import Empresa from "./empresa";
import Telefone from "./telefone";

let empresa = new Empresa('Steam')
empresa.telefone.push(new Telefone('12', '123456789'))

console.log(`ddd: ${empresa.telefone[0].ddd}`)
