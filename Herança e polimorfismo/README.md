<h1 align="center">🔹Herança e Polimorfismo🔹</h1>

<br id="topo">

## Conceito

<p align="justify">Pensando na etimologia da palavra polimorfismo, é possível perceber que a palavra poli significa “muitos”, enquanto a palavra metamorfose significa 
“forma”. Ou seja, quando fala-se sobre um polimorfismo, fala-se sobre algo que aparece em muitas formas diferentes.<br>
<br>
A definição da ciência da computação de polimorfismo pode ser oferecida em três versões diferentes:<br>
<br>
a) O polimorfismo é um recurso das linguagens de programação orientadas à objetos, que permite que uma rotina específica use variáveis de tipos diferentes, com nomes iguais, em momentos diferentes.<br>
<br>
b) Polimorfismo é a capacidade de uma linguagem de programação de apresentar a mesma interface para vários tipos de dados subjacentes diferentes.<br>
<br>
c) Polimorfismo é a capacidade de diferentes objetos responderem de uma maneira única à mesma mensagem.<br>
<br>
</p>

## Aplicabilidade

<p align="justify">O polimorfismo é uma das principais características de qualquer linguagem de programação, que segue o paradigma de programação orientada à objetos. Linguagens como Ruby, Java, TypeScript, C++ e C# suportam polimorfismo.<br>
<br>
O código polimórfico permite que um programa processe objetos de diferentes maneiras, dependendo de seu tipo ou classe, com a capacidade de redefinir métodos para classes derivadas.<br>
</p>

→ [Voltar ao topo](#topo)

## Herança

<p align="justify">Geralmente, o polimorfismo é obtido a partir da aplicação de outro recurso, que vem do paradigma de programação orientada à objetos. Este recurso é chamado de herança.<br>
<br>
Herança é um mecanismo no qual uma classe adquire a propriedade de outra classe. Com a herança, pode-se reutilizar os campos e métodos de uma classe existente. Consequentemente, a herança facilita a reutilização.<br>
</p>

→ [Voltar ao topo](#topo)

## Exemplo

<p align="justify">Uma classe pode estender outra classe, como uma classe base por exemplo. A classe que estende outra é denominada de classe filha ou subclasse. A 
classe que é estendida por uma ou mais classes é denominada de classe pai ou superclasse.<br>
<br>
No exemplo encontrado a seguir, é possível perceber que a classe Soma deriva da classe Cálculo, o que faz com que a classe Cálculo seja uma superclasse e a classe Soma seja uma subclasse:<br>
<br>
</p>

```
export default abstract class Calculo {
    public abstract calcular(numero1: number, numero2: number): number;
}
```

<br>

```
import Calculo from "./calculo";

export default class Soma extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 + numero2
    }
}
```

<br>

```
import Calculo from "./calculo";

export default class Subtracao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 - numero2
    }
}
```

→ [Voltar ao topo](#topo)

## Abstract

<p align="justify">O abstract é usado para transformar uma classe em abstrata. Isto é, uma classe restrita que não pode ser usada para criar objetos. Para que seja possível acessá-la, essa classe deve ser herdada por outra classe.<br>
<br>
O abstract, então, transforma um método em abstrato. Métodos abstratos só podem ser declarados dentro de classes abstratas. Este tipo de método é declarado sem corpo, porque é um abstração! O corpo deve ser fornecido pela subclasse.<br>
</p>

## Extends

<p align="justify">Em TypeScript, a palavra-chave extends é usada para indicar que uma classe, que está sendo definida, é derivada de uma classe base, usando herança. Então, basicamente, a palavra-chave extends é usada para estender a funcionalidade de uma superclasse para uma subclasse.<br>
<br>
Uma classe filha tem todas as propriedades e métodos de sua classe pai e também pode definir membros adicionais.<br>
</p>

→ [Voltar ao topo](#topo)

## Execução

<p align="justify">Para executar um método polimórfico neste exemplo, basta criar uma variável cálculo e, a partir dela, criar um objeto específico para a operação desejada. Feito isso, será necessário acionar o método passando os argumentos, conforme ilustrado abaixo: <br></p>

```
import Soma from "./soma";
import Subtracao from "./subtracao";

let calculo = new Soma()
console.log(calculo.calcular(10,5))

calculo = new Subtracao()
console.log(calculo.calcular(20,8))
```

Obs.: O método calcular() se comporta, portanto, de modo polimórfico.

→ [Voltar ao topo](#topo)

## Sobrescrever métodos

<p align="justify">Sobrescrever métodos significa alterar seu comportamento durante a herança. Qualquer método pode ser sobrescrito, desde que não seja bloqueado, explicitamente, contra sobrescrição.<br>
<br>
Na sobrescrição, a assinatura do método deve ser sempre respeitada! Do contrário, não se estará sobrescrevendo, mas sim, criando um método novo.<br>
<br>
Obs.: Uma assinatura de método faz parte da declaração do método. É a combinação do nome do método e da lista de parâmetros.<br>
<br>
</p>

→ [Voltar ao topo](#topo)

## Parâmetros x Argumentos

<p align="justify">Parâmetros são as variáveis, locais, que são usadas para passar valor para dentro dos métodos:<br></p>

```
 public calcular(numero1: number, numero2: number): number {
        return numero1 + numero2
    }
```

<p align="justify">Por outro lado, argumentos são os valores que são passados para dentro dos métodos, passados através das variáveis:<br></p>

```
let calculo = new Soma()
console.log(calculo.calcular(10,5))
```

→ [Voltar ao topo](#topo)

## Classes abstratas

<p align="justify">Lembre-se que não é possível criar um objeto diretamente de uma classe abstrata. Uma classe abstrata pode ter métodos não abstratos, eles também 
serão herdados, caso ocorra aplicação da herança para uma subclasse.<br>
<br>
Na classe abstrata também pode-se aplicar os modificadores de acesso, como o private e o public.<br>
</p>

## Herança

<p align="justify">Herança é um dos aspectos mais importantes do paradigma de programação orientada à objetos.  chave para entender a herança é que ela fornece a reutilização do código. Ao invés de escrever o mesmo código, repetidamente, pode-se simplesmente herdar as propriedades de uma classe para a outra. A herança pode acontecer mesmo que a superclasse não seja abstrata!<br></p>

→ [Voltar ao topo](#topo)
