// Primeira variavel let
var numeroUm = 1;
// criar uma função
function declaracaolet() {
    // 2º variável let
    var numeroDois = 2;
    // declaração de um bloco if
    if (numeroUm < numeroDois) {
        // 3º variável let
        var numeroTres = 3;
        numeroTres++;
        console.log(numeroTres);
        console.log(numeroTres);
    }
    // criar um loop while()
    while (numeroUm < numeroDois) {
        // 4º variável
        var numeroQuatro = 4;
        numeroUm++;
        console.log(numeroQuatro);
    }
    // acessar as variáveis declaradas com let
    console.log(numeroUm);
    console.log(numeroDois);
    // console.log(numeroTres)
    // console.log(numeroQuatro)
}
declaracaolet();
