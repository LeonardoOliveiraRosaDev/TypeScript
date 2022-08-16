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