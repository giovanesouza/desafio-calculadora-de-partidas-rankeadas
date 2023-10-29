
// Variáveis
const input = require('readline-sync');



// Laço de repetição
do {
    
    // Entrada de dados
    let vitorias = input.questionInt("Informe a quantidade de vitorias: ");
    let derrotas = input.questionInt("Informe a quantidade de derrotas: ");
    
    // Chama a função atribuindo os valores passados pelo usuário e salva na variável 'saldoVitorias'
    let saldoVitorias = calcularPartida(vitorias, derrotas);
    

    let nivel = "";

    // Estrutura de decição -> Determina o nível
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";

    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";

    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";

    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";

    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";

    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }


    // Saída
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);

    let sair = input.question('Deseja verificar mais algum saldo de vitorias? [s/n]');

    // Caso digite 'n', sai do loop
    if (sair === 'n')
        break;


} while (true);


// Função
function calcularPartida(vitorias, derrotas) {
    const resultado = vitorias - derrotas;
    return resultado;
}