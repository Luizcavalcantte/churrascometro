// carne - 400 gr por pessoa, + de 6h passa pra 650gr p/pessoa
//refri/sucos - 1000 p/ pessoa, + de 6h 1500ml
//cerveja - 1200ml p/ pessoa, + de 6h passa pra 2000ml p/ pessoa
// criança vale por meia pessoa

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultadoCa = document.getElementById("1");
let resultadoBe = document.getElementById("2");
let resultadoCe = document.getElementById("3");

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtddCarne = adultos * 400 + (400 / 2) * criancas;

  let qtddBebidas = adultos * 1000 + (1000 / 2) * criancas;

  let qtddCerveja = adultos * 1200;

  if (duracao > 6) {
    qtddCarne = 650 * adultos + (650 / 2) * criancas;
    qtddBebidas = 1500 * adultos + (1500 / 2) * criancas;
    qtddCerveja = 2000 * adultos;
  } else {
    qtddCarne = qtddCarne;
    qtddBebidas = qtddBebidas;
    qtddCerveja = qtddCerveja;
  }
  console.log("carne " + qtddCarne);
  console.log("bebidas " + qtddBebidas);
  console.log("cerveja " + qtddCerveja);

  resultadoCa.innerText = "Carne: " + qtddCarne / 1000 + "kg";
  resultadoBe.innerText =
    "Refrigerante ou suco: " + qtddBebidas / 1000 + "Litros";
  resultadoCe.innerText = "Cerveja: " + qtddCerveja / 1000 + "Litros";
}
