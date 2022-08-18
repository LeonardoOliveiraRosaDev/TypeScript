// criar uma classe simples com ts
/*class Saudacao{
    // definir um método para esta classe
    dandoUmAlo():void {
        // return "Olá Tudo Bem !"
        console.log('Dando um alô para o Angular que ja está chegando!')
    }
}

// criar um objeto a partir da classe Saudacao()
// para que seja possivel fazer uso do método dandoUmAlo()

var acenar: Saudacao = new Saudacao() // instanciar a classe


// fazer uso do objeto criado

acenar.dandoUmAlo()*/
// console.log(acenar.dandoUmAlo())

// 2º Classe

class CarrinhoDeMao{
    // aqui, será declarado um field (nome tecnico de uma variavel dentro da classe)
    motor: string // propriedade undefined field um atributo da classe uma propriedade, 
    // dentro do type script e field

    // Construtor padrão constructor(){}
    // Construtor é um método/função especial que compoe a classe
    //agora, referenciar o construtor customizado da classe (só serve para esta classe por isso customizado)
    constructor(motor:string){
        this.motor = motor
    }
    //neste passo, criar um método
    qualEhMotor():void {
        console.log('Este método/função exibirá o valor associado a propriedade do motor descrita na classe: ' + this.motor)
    }
}

// Criar a instancia da Classe
var carrinho: CarrinhoDeMao = new CarrinhoDeMao('Meus Braços')

// tentativa de acesso a propriedade motor descrita dentro da classe
console.log('Este é o acesso ao field/atributo/variável motor ' + carrinho.motor)

// tentativa de acessar o metodo dentro da classe
carrinho.qualEhMotor()