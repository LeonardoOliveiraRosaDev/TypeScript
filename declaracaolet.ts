// Primeira variavel let
var numeroUm: number = 1
// Caso essas variaveis nao estejam aqui abaixo fora de um escopo{}
// se usaria assim dentro do escopo var numeroTres: number | undefined = 3 
// se usaria assim dentro do escopo var numeroQuatro: number | undefined = 4
var numeroTres: number
var numeroQuatro: number

// criar uma função
function declaracaolet(){
        // 2º variável let
       var numeroDois: number = 2

        // declaração de um bloco if
        if(numeroUm < numeroDois){
            // 3º variável let
            numeroTres: 3
            numeroTres++
            console.log(numeroTres)
        }

        // criar um loop while()
        while(numeroUm < numeroDois){
            // 4º variável
            numeroQuatro: 4
            numeroUm++
            console.log(numeroQuatro)
        }

        // acessar as variáveis declaradas com let
        console.log(numeroUm)
        console.log(numeroDois)
        console.log(numeroTres)
        console.log(numeroQuatro)

}

// chamar a função a sua execução
declaracaolet()

/*
// Primeira variavel let
let numeroUm: number = 1

// criar uma função
function declaracaolet(){
        // 2º variável let
        let numeroDois: number = 2

        // declaração de um bloco if
        if(numeroUm < numeroDois){
            // 3º variável let
            let numeroTres: number = 3
            numeroTres++
            console.log(numeroTres)
        }

        // criar um loop while()
        while(numeroUm < numeroDois){
            // 4º variável
            let numeroQuatro: number = 4
            numeroUm++
            console.log(numeroQuatro)
        }

        // acessar as variáveis declaradas com let
        console.log(numeroUm)
        console.log(numeroDois)
        // console.log(numeroTres)
        // console.log(numeroQuatro)

}

// chamar a função a sua execução
declaracaolet()

*/