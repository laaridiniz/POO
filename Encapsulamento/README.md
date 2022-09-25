<h1 align="center">🔹Encapsulamento🔹</h1>

<br id="topo">

<p align="justify">Encapsulamento se refere ao agrupamento de dados, junto com os métodos que operam esses dados. Muitas linguagens de programação usam encapsulamento frequentemente na forma de classes.<br>
<br>
Encapsular dados, portanto, significa qualificar a forma de armazenar dados em objetos. Encapsulamento refere-se à restrição do acesso direto a alguns dos componentes de um objeto.<br>
<br>
<b>VANTAGEM</b>:<br>
<br>
O encapsulamento é um mecanismo de restrição do acesso direto a alguns componentes de um objeto, de forma que outros objetos não possam acessar os valores de todas as variáveis ou métodos de um objeto específico.<br>
<br>
O encapsulamento pode ser usado para ocultar ou proteger membros e métodos associados a uma classe ou objeto instanciado, do acesso direto de códigos externos.<br>
<br>
<b>COMO PROTEGER OS DADOS</b>?<br>
<br>
Para encapsular dados utiliza-se modificadores de acesso, palavras reservadas que modificam a forma de acesso aos dados. Desta forma, a linguagem TypeScript pode controlar se determinados métodos ou propriedades são “visíveis” aos códigos fora da classe.<br>
<br>
Como é possível perceber no código abaixo, a expressão <i>private</i> faz esse papel de limitar o acesso a determinado atributo:<br>
</p>

```
export default class Empresa {
    private razaoSocial: string
    public nomeFantasia: string
    private cnpj: string
    public endereco: Endereco
}
```

<p align="justify"><b>COMO O ACESSO É BLOQUEADO</b>?<br>
<br>
Os atributos privados deixam de ser visíveis para fora do objeto e portanto, não podem ser modificados diretamente. Os demais atributos públicos, que continuam visíveis, são modificáveis diretamente:<br>
</p>

<p align="center">
<img src="encapsulamento.jpg" width="80%" height="80%">
</p>

<p align="justify">Para a linguagem TypeScript existem três modificadores de acesso: <i>private</i>, <i>protected</i> e <i>public</i>. A visibilidade padrão dos membros de uma classe é pública, ou seja, modificada pela palavra-chave "public". Um membro público pode ser acessado em qualquer lugar.<br>
<br>
<b>IMPORTANTE!</b><br>
<br>
Quando não se declara o modificador o padrão aplicado é <i>public</i>.<br>
<br>
Lembrando que encapsular não significa nunca mais acessar, mas sim acessar com restrição. A forma de fazer isto é através de métodos. Lembre-se que o objetivo do 
encapsulamento é modificar a forma de acesso aos dados. O modificador <i>private</i> bloqueia completamente a visibilidade de um membro da classe a qualquer código fora do próprio corpo da classe.<br>
</p>

## MÉTODOS GET E SET

<p>[Em construção]</p>

→ [Voltar ao topo](#topo)
