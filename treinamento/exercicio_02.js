// 2. Somar valores e mostrar em R$:
var valores = [100.0, 1236.2, 777.77]
// Exemplo do formato da resposta: R$368,24

var total = valores.reduce((total, valor) => total + valor, 0);
total = Number(total).toFixed(2)
console.log(`R$ ${total}`);