// 4. Tendo o objeto A e B:
let ObjA = '[{"item":"fruta","nome":"maçã","qtd":1},{"item":"fruta","nome":"banana","qtd":7},{"item":"legumes","nome":"cenouras","qtd":3},{"item":"bebidas","nome":"cervejas","qtd":4}]';
let ObjB = '[{"item":"fruta","nome":"maçã","precoUnidade":0.25},{"item":"fruta","nome":"banana","precoUnidade":3},{"item":"legumes","nome":"cenouras","precoUnidade":2},{"item":"bebidas","nome":"cervejas","precoUnidade":2.5}]';

// Crie o ObjC com a seguinte estrutura
//let ObjC = [{
	//item: 'bebidas',
	//nome: 'cervejas',
	//qtd: 4,
	//precoUnidade: 2.5,
	//valorTotal: qtd * precoUnidade
//}]


var Obja = JSON.parse(ObjA);
var Objb = JSON.parse(ObjB);

Obja.forEach(function(item, index) {
    var ObjectC = [{item: item.item , nome: item.nome, qtd: item.qtd, precoUnidade: Objb[index].precoUnidade, 
    valorTotal: item.qtd * Objb[index].precoUnidade
    }];
    console.log(ObjectC)
});

  