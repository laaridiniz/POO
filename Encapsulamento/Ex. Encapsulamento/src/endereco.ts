export default class Endereco{
    logradouro:string
    numero:string
    bairro:string
    cep:string
    cidade:string

    constructor(logradouro:string, numero:string, bairro:string, cep:string, cidade:string){
        this.logradouro = logradouro
        this.numero = numero
        this.bairro = bairro
        this.cep = cep
        this.cidade = cidade
    }
}