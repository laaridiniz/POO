import Telefone from "./telefone"

export default class Empresa{
    public nome: string
    public telefone: Telefone [] = []
    constructor(nome:string){
        this.nome = nome
    }
}