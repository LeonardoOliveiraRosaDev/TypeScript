// // implementar a constante
// const idParticipantes ={
//     participanteA: 1,
//     participanteB: 2,
//     participanteC: 3,
//     participanteD: 4,
//     participanteE: 5
// }
// // Exbição do objeto literal
// console.log(idParticipantes)
// // Tentativa de acessar o objeto literal e uma de suas 
// // propriedades e alterar o seu valor
// idParticipantes.participanteD = 89
// // reexibir o objeto literal
// console.log(idParticipantes)
var vidaGatos = [9];
// Criar objeto literal
var dadosGato = {
    nome: 'Mila Burns',
    qtdVidas: vidaGatos
};
// exibir o objeto literal
console.log(dadosGato);
// aplicar algumas alterações nas propriedades do objeto literal
var novaQtdVidas = [149, 121, 56, 89];
dadosGato.nome = 'Frajolinha';
dadosGato.qtdVidas = novaQtdVidas;
// Exibir as alterações
console.log('A quantidade de vidas de ', dadosGato.nome, 'é igual a ', dadosGato.qtdVidas);
// reexibir o objeto literal
console.log(dadosGato);
