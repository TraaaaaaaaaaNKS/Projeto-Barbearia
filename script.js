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

// Gestos horizontais na foto ampliada, preservando a rolagem e o zoom nativos.
const areaFoto = visualizador.querySelector('.foto-ampliada');
let inicioGesto = null;
areaFoto.addEventListener('touchstart', (evento) => {
  inicioGesto = evento.touches.length === 1
    ? { x: evento.touches[0].clientX, y: evento.touches[0].clientY }
    : null;
}, { passive: true });
areaFoto.addEventListener('touchmove', (evento) => {
  if (evento.touches.length !== 1) inicioGesto = null;
}, { passive: true });
areaFoto.addEventListener('touchcancel', () => { inicioGesto = null; });
areaFoto.addEventListener('touchend', (evento) => {
  const inicio = inicioGesto;
  inicioGesto = null;
  if (!inicio || evento.touches.length || evento.changedTouches.length !== 1) return;
  const dx = evento.changedTouches[0].clientX - inicio.x;
  const dy = evento.changedTouches[0].clientY - inicio.y;
  if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    mostrarFoto(fotoAtual + (dx < 0 ? 1 : -1));
  }
}, { passive: true });
visualizador.addEventListener('close', () => { inicioGesto = null; });
imagemAmpliada.draggable = false;
