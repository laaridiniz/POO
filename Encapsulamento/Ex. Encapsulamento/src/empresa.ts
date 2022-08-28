import Endereco from "./endereco"
import Funcionario from "./funcionario"
import Telefone from "./telefone"

export default class Empresa{
    public razaoSocial: string
    readonly cnpj: string
    //public endereco:Endereco
    private telefones: Telefone[]
    private funcionario: Funcionario[]

    constructor(razaoSocial: string, cnpj: string) {
        this.razaoSocial = razaoSocial
        this.cnpj = cnpj
        this.telefones = []
        this.funcionario = []

    }

    get obterCnpj() {
        return this.cnpj
    }

    get obterFuncionario() {
        return this.funcionario
    }

    get obterTelefones() {
        return this.telefones
    }
}