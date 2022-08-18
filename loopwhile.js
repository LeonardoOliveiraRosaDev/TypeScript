// 1º loop while
var numero = 10;
var fatorial = 1;
var resultado = 0;
// definir o loop while
while (numero >= 1) {
    // tentativa de mostrar o processo de multiplicação
    // das variaveis
    resultado = fatorial + ' x ' + numero + ' = ';
    fatorial = fatorial * numero;
    // decrementando a variável número
    numero--;
    console.log(resultado, fatorial);
}
// exibir o valor do fatorial
console.log('O valor do fatorial de 10 até 1 é: ', +fatorial);
