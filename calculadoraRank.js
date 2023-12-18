let quantidadeDerrota = 777
let quantidadeVitoria = 1000


function calcularRank(quantidadeVitoria, quantidadeDerrota) {
    return quantidadeVitoria - quantidadeDerrota;  
  }

let resultado = calcularRank(quantidadeVitoria, quantidadeDerrota)

if (resultado <= 10) {
    console.log(imprimirResultado(resultado, "Ferro"))
} else if (resultado >= 11 && resultado <= 20) {
    console.log(imprimirResultado(resultado, "Bronze"))
} else if (resultado >= 21 && resultado <= 50) {
    console.log(imprimirResultado(resultado, "Prata"))
} else if (resultado >= 51 && resultado <= 80) {
    console.log(imprimirResultado(resultado, "Ouro")) 
} else if (resultado >= 81 && resultado <= 90) {
    console.log(imprimirResultado(resultado, "Diamante"))
} else if (resultado >= 91 && resultado <= 100) {
    console.log(imprimirResultado(resultado, "Lendário"))
} else if (resultado >= 101) {
    console.log(imprimirResultado(resultado, "Imortal"))
}


function imprimirResultado (saldo, nivel) {
    return "O Herói tem de saldo de: " +saldo+ " está no nível " + nivel
}