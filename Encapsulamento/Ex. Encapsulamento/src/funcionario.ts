export default class Funcionario{
    nome:string
    readonly cpf:string

    constructor(nome:string, cpf:string){
        this.nome = nome
        this.cpf = cpf
    }
}