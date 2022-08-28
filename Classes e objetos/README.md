<h1 align="center">🔹Classes e Objetos🔹</h1>

<br id="topo">

<p align="justify">Antes de adentrar no tema, é preciso esclarecer algumas noções importantes. Sabe-se que a programação orientada a objetos é uma espécie de paradigma de programação. Sendo assim, é necessário ter em mente que <b>paradigma de programação</b> nada mais é do que uma <b>forma de classificar as linguagens de programação de acordo com os recursos que ela oferece</b>.<br>
<br>
Um paradigma de programação pode ser:<br>
<br>
<b>a) Imperativo:</b> Na programação Imperativa, ou Procedural, o foco é em descrever detalhadamente o passo a passo de um processo que a máquina deve executar, ou seja, as instruções são passadas por meio de códigos na sequência que devem ser executadas. (Jozefovics). Instruções como if, while, switch e for são típicas de linguagens de programação imperativas. (Malavasi). O paradigma imperativo é utilizado em linguagens como PHP, Java, Lua e Python.<br>
<br>
<b>b) Declarativo:</b> o paradigma declarativo não se preocupa com a maneira ou método de execução de uma determinada rotina porque, neste caso, o foco não está no “como”, mas sim no “que”. (Malavasi). Os maiores exemplos desse tipo de paradigma são a linguagem SQL, usada para declarar consultas ao banco de dados, e a linguagem de marcação HTML, utilizada especialmente na criação de sites. (Branco).<br> 
<br>
<b>c) Reativo:</b> é uma forma de programar a eventos ou alterações nos estados da aplicação. Com isso, a sintaxe do código e as funções executadas pelo programa sempre são feitas de forma que respondam a possíveis ações interpretadas pela máquina. A linguagem de programação JavaScript, que conta com funções multi-paradigmas, pode ter a biblioteca React implementada, permitindo esse tipo de desenvolvimento nela.(Branco).<br>
<br>
O paradigma de programação orientada à objetos faz parte do grupo imperativo, já que com essa técnica o desenvolvedor define as instruções que deverão ser executadas e a ordem dessas execuções.<br>
<br>
Na programação orientada à objetos, os objetos do mundo real são vistos como entidades separadas com seu próprio estado e esse estado é modificado apenas por procedimentos internos, chamados métodos. Em outras palavras, cada objeto tem suas próprias propriedades ou atributos, podendo conter também seus próprios procedimentos ou métodos.<br>
<br>
A criação e organização de objetos acontece a partir de classes, que são definidas pelo desenvolvedor.<br>
<br>
Considerando que os erros mais comuns durante a programação são provocados pelo uso equivocado de tipos, é importante esclarecer alguns aspectos relativos aos tipos de dados.<br>
<br>
Para poder reservar um espaço da memória para inserir os dados necessários para a execução de um algoritmo são utilizadas as variáveis (quando o seu valor pode ser alterado ao longo do tempo) ou as constantes (quando é preciso armazenar um valor que não muda no decorrer da execução do algoritmo).<br>
<br>
Pensando em otimizar a utilização da memória, é comum definir um tipo de dados para cada variável. Por exemplo, se for criada uma variável "Nome", é possível definir o tipo texto (ou string) para essa variável. Da mesma forma que se for criada uma variável "Idade", ela será definida como número (inteiro ou real).<br>
<br>
Existem os chamados <b>tipos primitivos</b>, que são tipos de dados básicos fornecidos pela linguagem de programação. Em JavaScript, por exemplo, um tipo primitivo corresponde a um tipo de dado que não é, necessariamente, um objeto. Além disso, a linguagem conta com 7 tipos de dados primitivos: string, number, bigint, boolean, undefined, symbol e null.
Os tipos string, number e boolean são os mais comumente usados:
</p>

```
let texto = 'string'
let numero = 27
let booleano = true
```

<p align="justify">A partir dos tipos primitivos pode-se criar outros tipos, compostos e mais complexos, como objetos.<br>
<br>
Para declarar uma variável em TypeScript usa-se <b>var</b>, <b>let</b> ou <b>const</b>, e a anotação de tipo é opcional. A anotação de tipo é o que especifica explicitamente o tipo da variável, como ocorre a seguir:<br></p>

```
let texto:string = 'string'
let numero:number = 27
let booleano:boolean = true
```

<p align="justify">Caso o desenvolvedor opte por inserir a anotação de tipo na variável, ele deverá inserí-la <b>após o nome da variável</b>, assim como demonstrado.<br>
<br>O compilador TypeScript costuma tentar inferir automaticamente os tipos no código. Por exemplo, o tipo de uma variável pode ser inferido com base no seu valor. Portanto, para a linguagem TypeScript, os códigos transcritos acima são equivalentes, ainda que um não tenha a anotação de tipo na declaração da variável e o outro tenha.<br>
<br>Em se tratando de TypeScript, é importante mencionar que ela conta com um tipo indefinido chamado <b>any</b>, que é usado quando não se quer atribuir um tipo explicitamente ou quando não se quer colocar “certeza” no tipo da variável. Além disso, o compilador TypeScript também assumirá como padrão any quando houver uma variável cujo tipo não está especificado e o compilador TypeScript não pode inferir qual é esse tipo a partir do contexto, como ocorre com o trecho de código abaixo:<br></p>

```
let cumprimento = (mensagem:any) => {
    console.log(`Bem-vindo: ${mensagem}`)
}
```

<p align="justify">O TypeScript permite a especificação dos tipos de valores de entrada e saída das funções. As anotações de tipo de retorno aparecem após a lista de parâmetros.Assim como com variáveis, também ocorre a inferência do tipo de retorno, se ele não for definido explicitamente.<br>
<br>
O TypeScript também permite a combinação dos tipos, o que é designado como <b>união de tipos</b>. Essa união cria um novo tipo, que é formado a partir de dois ou mais tipos, e representa valores que podem ser de qualquer um dos tipos da união. Esse novo tipo é referido como união de membros e ocorre da seguinte forma:
<br></p>

```
let mensagem = (informacao: string | number): string => {
    return `Informação: ${informacao}`
}
```
<p align="justify">Importante destacar que o compilador TypeScript só permitirá que se faça coisas com união de membros se isso for válido para todos os tipos usados na união. Por exemplo, para a união dos tipos string e number, não pode-se usar métodos que estão disponíveis apenas em string. Por esse motivo, quando o código abaixo é inserido em um editor, a expressão "toUpperCase" aparece grifada de vermelho:
<br></p>

```
let mensagem = (informacao: string | number): string => {
    return `Informação: ${informacao.toUpperCase()}`
}
```
<p align="justify">Pode-se definir tipos com objetos, que são usados como apelidos para dados complexos.<br>
<br>
Obs.: No TypeScript, criar um novo tipo não é obrigatório, mas pode ser conveniente.<br></p>

```
type Telefone = {
    ddd:string
    numero:string
}

let mensagem = (informacao: Telefone): string => {
    return `ddd: ${informacao.ddd} número: ${informacao.numero}`
}
```

<p align="justify">O interpretador JavaScript oferece suporte a um operador de tipo, o <b>typeof</b>. Este operador pode fornecer informações muito básicas sobre o tipo do valor de uma variável, em tempo de execução. Este operador também está disponível para TypeScript.<br></p>

```
let mensagem = (informacao: string | number): string => {
    if (typeof informacao === string) {
        return `informação recebida: ${informacao.toUpperCase()}`
    } else {
        return `informação recebida: ${informacao}`
    }
}
```
<p align="justify">O typeof fará a comparação dos tipos pelo nome.<br>
<br>
<b>IMPORTANTE!</b><br>
Em JavaScript existem dois tipos de operadores de igualdade:<br>
</p>

* Para comparar a igualdade de valores, usa-se “==”.
* Para comparar a igualdade de valores e tipos, usa-se “===”.<br>

<p align="justify">O <b>typeof</b> consegue descobrir se uma variável possui algum dos tipos: “string”, “number”, “bigint”, “boolean”, “symbol”, “undefined”, “object”, “function”.<br>
<br>
<b>CONCEITO DE OBJETO</b>:<br>
<br>
É possível definir um objeto como um elemento (instância) de uma classe. Objetos têm os comportamentos de sua classe. O objeto é o componente real dos programas, enquanto a classe especifica como as instâncias são criadas e como se comportam. Um objeto pode ser uma variável, uma estrutura de dados, uma função ou um método e, como tal, é um valor na memória referenciado por um identificador. Um objeto pode ser uma combinação de variáveis, funções e estruturas de dados.<br>
<br>
<b>CONCEITO DE CLASSE</b>:<br>
<br>
Uma classe é uma forma de definir (declarar) um tipo especial de dado, ou seja, um tipo que não seja simples como um primitivo. Como analogia: assim como um engenheiro desenha a planta baixa de um imóvel, a classe é a planta baixa do objeto.<br>
<br>
No exemplo abaixo, foi criada a classe Endereço que define como será um objeto do tipo endereço, determinando quais dados ele irá possuir e qual o tipo desses dados:<br>
</p>

```
class Endereco {
    private numero: string
    private rua: string
    private bairro: string
    private cidade: string
    constructor(numero: string, rua: string, bairro: string, cidade: string){
        this.numero = numero
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
    }
}
```

<p align="justify">Outro conceito importante é o de <b>atributos</b>. Os dados armazenados são chamados de atributos e eles não precisam ser do mesmo tipo. No desenvolvimento com o paradigma de programação orientada à objetos é comum chamar os atributos de campos ou membros de classe. No exemplo acima, os campos número, rua, bairro e cidade são os atributos.<br></p>
<p> Além disso, temos o conceito de <b>método</b>. Toda classe pode ter comportamentos, algo que ela faz, e esse comportamento é definido por métodos. Métodos são funções definidas na classe, que todos os seus objetos terão. Dentro do corpo de um método, o acesso aos campos se dá por meio da palavra-chave “this”. A partir do exemplo anterior, pode-se criar um método para mostrar o endereço:<br>
</p>

```
class Endereco {
    public numero: string
    public rua: string
    public bairro: string
    public cidade: string

    public mostrarEndereco(){
        return `Cidade ${this.cidade}, bairro ${this.bairro}, rua ${this.rua}, numero ${this.numero} `
    }
}
```


## Referências:

<p>https://canaltech.com.br/mercado/quais-as-diferencas-entre-programacao-imperativa-declarativa-e-reativa-212715/#:~:text=J%C3%A1%20o%20paradigma%20Declarativo%20%C3%A9,ap%C3%B3s%20a%20execu%C3%A7%C3%A3o%20do%20software
<br>
https://medium.com/@alexandre.malavasi/descomplicando-programa%C3%A7%C3%A3o-imperativa-declarativa-e-reativa-a481baa87742<br></p>
