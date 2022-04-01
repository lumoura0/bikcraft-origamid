// Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)){
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink);

// Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if(elemento) {
        elemento.checked = true;
    }
    console.log(elemento)
}

parametros.forEach(ativarProduto);


// Perguntas Frequentes

const Perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains("ativa")
    console.log(ativa)
    pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

Perguntas.forEach(eventosPerguntas)


// Galeria de Bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if (media) {
    galeriaContainer.prepend(img)
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)

// Animação
if(window.SimpleAnime) {
  new SimpleAnime();
}