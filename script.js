// Menu responsivo e ano do rodap?.
const botaoMenu = document.querySelector('.botao-menu');
const navegacao = document.querySelector('.navegacao');
document.querySelector('#ano').textContent = new Date().getFullYear();

botaoMenu.addEventListener('click', () => {
  const menuEstaAberto = navegacao.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', String(menuEstaAberto));
});

navegacao.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navegacao.classList.remove('aberto');
    botaoMenu.setAttribute('aria-expanded', 'false');
  });
});


// Visualizador das fotos da galeria.
const fotos = [...document.querySelectorAll('.item-galeria')];
const visualizador = document.querySelector('.visualizador');
const imagemAmpliada = visualizador.querySelector('img');
const legendaAmpliada = visualizador.querySelector('figcaption');
const anterior = visualizador.querySelector('.foto-anterior');
const seguinte = visualizador.querySelector('.foto-seguinte');
const fecharFoto = visualizador.querySelector('.fechar-foto');
let fotoAtual = 0;
let origemFoto;

function mostrarFoto(indice) {
  if (indice < 0 || indice >= fotos.length) return;
  fotoAtual = indice;
  const imagem = fotos[indice].querySelector('img');
  imagemAmpliada.src = imagem.src;
  imagemAmpliada.alt = imagem.alt;
  legendaAmpliada.textContent = fotos[indice].querySelector('figcaption').textContent.trim()
    + ' (' + (indice + 1) + '/' + fotos.length + ')';
  anterior.hidden = indice === 0;
  seguinte.hidden = indice === fotos.length - 1;
  if (document.activeElement === anterior && anterior.hidden) seguinte.focus();
  if (document.activeElement === seguinte && seguinte.hidden) anterior.focus();
}

fotos.forEach((foto, indice) => {
  const botao = foto.querySelector('.abrir-foto');
  botao.setAttribute('aria-label', 'Ampliar: ' + foto.querySelector('img').alt);
  botao.addEventListener('click', () => {
    origemFoto = botao;
    mostrarFoto(indice);
    visualizador.showModal();
    document.body.classList.add('foto-aberta');
  });
});
anterior.addEventListener('click', () => mostrarFoto(fotoAtual - 1));
seguinte.addEventListener('click', () => mostrarFoto(fotoAtual + 1));
fecharFoto.addEventListener('click', () => visualizador.close());
visualizador.addEventListener('click', (evento) => {
  if (evento.target === visualizador || evento.target.classList.contains('conteudo-visualizador')) visualizador.close();
});
visualizador.addEventListener('close', () => {
  document.body.classList.remove('foto-aberta');
  origemFoto?.focus();
});
visualizador.addEventListener('keydown', (evento) => {
  if (evento.key === 'ArrowLeft' || evento.key === 'ArrowRight') {
    evento.preventDefault();
    mostrarFoto(fotoAtual + (evento.key === 'ArrowLeft' ? -1 : 1));
  }
});
