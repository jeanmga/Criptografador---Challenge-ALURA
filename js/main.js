var respostaVazia = document.querySelector('.resposta-vazia')
var respostaPreenchida = document.querySelector('.resposta-preenchida')
const mensagem = document.querySelector('#entradaMensagem');

var botaoCriptografar = document.querySelector('.criptografar')
var botaoDescriptografar = document.querySelector('.descriptografar')
var botaoCopiar = document.querySelector('.botao-copia')

var entradaMensagem = document.querySelector('#texto')
var textoCodificado = document.querySelector('.texto-codificado')


function mostrarResposta() {
  
  if (entradaMensagem.value !== '') {
    respostaVazia.style.display = 'none'
    respostaPreenchida.style.display = 'block'
  }
}


function criptografar() {

  var conteudoTextarea = entradaMensagem.value
  var resultadoCriptografado = conteudoTextarea
  .replaceAll("e", "jfk")
  .replaceAll("i", "nxi7")
  .replaceAll("a", "ykz3")
  .replaceAll("o", "pzm5")
  .replaceAll("u", "mnp9")

  textoCodificado.innerHTML = resultadoCriptografado;

  mostrarResposta()
}

function tudoMinusculo(string) {

  let resultado = string.value.toLowerCase();
  string.value = resultado;
}

function descriptografar() {

  conteudoTextarea = entradaMensagem.value

  var resultadoDescriptografado = conteudoTextarea
  .replaceAll("jfk", "e")
  .replaceAll("nxi7", "i")
  .replaceAll("ykz3", "a")
  .replaceAll("pzm5", "o")
  .replaceAll("mnp9", "u")

  textoCodificado.innerHTML = resultadoDescriptografado

  mostrarResposta()
}


function copiaTexto() {

  textoCodificado.select() 
  document.execCommand('copy')
  alert("Resultado copiado: " + textoCodificado.value)
}


botaoCriptografar.onclick = criptografar
botaoDescriptografar.onclick = descriptografar
botaoCopiar.onclick = copiaTexto
