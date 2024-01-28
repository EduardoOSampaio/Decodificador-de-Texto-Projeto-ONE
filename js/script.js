let input = document.querySelector("#textarea-texto");
let texto;
let displayNone = document.getElementById("display-none");
let btnCriptografar = document.getElementById("btn-criptografar");
let inputCriptografado = document.querySelector(".texto-criptografado")
let btnCopiar = document.getElementById("btn-copiar")

function criptografar() {
  texto = input.value;
  if (!texto == false) {
    displayNone.style.display = "none";
    inputCriptografado.style.display = 'block';
    btnCopiar.style.display = 'block';
  }
  texto = texto.replaceAll(/e/g, 'enter')
  texto = texto.replaceAll(/i/g, 'imes')
  texto = texto.replaceAll(/a/g, 'ai')
  texto = texto.replaceAll(/o/g, 'ober')
  texto = texto.replaceAll(/u/g, 'ufat')

  inputCriptografado.value = texto;
}

function descriptografar() {
    texto = input.value;
    texto = texto.replaceAll(/enter/g, 'e')
    texto = texto.replaceAll(/imes/g, 'i')
    texto = texto.replaceAll(/ai/g, 'a')
    texto = texto.replaceAll(/ober/g, 'o')
    texto = texto.replaceAll(/ufat/g, 'u')
    inputCriptografado.value = texto;
}

function copiar() {
    inputCriptografado.select()
    navigator.clipboard.writeText(inputCriptografado.value)
}
