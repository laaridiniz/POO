import Empresa from "./empresa";
import Funcionario from "./funcionario";
import Telefone from "./telefone";

let empresa = new Empresa("ABC LTDA", '123456')
let funcionario1 = new Funcionario("Alice", '987987987')
let funcionario2 = new Funcionario("Bernardo", '145236987')
let telefoninho = new Telefone('12', '39393939', 'Alice')
let telefoninho2 = new Telefone('11', '78541238', 'Bernardo')

empresa.obterFuncionario.push(funcionario1, funcionario2)
empresa.obterTelefones.push(telefoninho, telefoninho2)

empresa.obterFuncionario.forEach(f=>{
    console.log(`nome: ${f.nome} CPF: ${f.cpf}`)
})

empresa.obterTelefones.forEach(t=>{
    console.log(`ddd: ${t.ddd} numero: ${t.numero}`)
})
