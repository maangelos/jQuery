// 1. Somar valores e mostrar em R$:
var valores = [{
	valorA: 100.0,
	valorB: 1236.2,
	valorC: 777.77
}]
// Exemplo do formato da resposta: R$368,24

//estático
var total = 0;
for (var valor in valores[0]){
    total += valores[0][valor];
}
total = Number(total).toFixed(2);
console.log(`R$ ${total}`);

//dinâmico
valores.map(function(valor) {
    total = Object.values(valor).reduce((total, valor) => total + valor, 0);
    total = Number(total).toFixed(2);
    console.log(`R$ ${total}`);
});





