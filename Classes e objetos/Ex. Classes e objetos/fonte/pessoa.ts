export default class Pessoa {
    public nome: string
    public cpf: string
    constructor(nome:string, cpf:string){
        this.nome = nome
        this.cpf = cpf
    }

    public obterCpf = () => {
        return this.cpf
    }
}
