// ===== WhatsApp =====
const WHATSAPP = '5511939484209';

function linkWhatsApp(mensagem) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

document.querySelectorAll('[data-servico]').forEach(botaoServico => {
  const servico = botaoServico.dataset.servico;
  botaoServico.href = linkWhatsApp(`Olá! Vim pelo site e gostaria de um orçamento de ${servico}.`);
  botaoServico.target = '_blank';
  botaoServico.rel = 'noopener';
});

// ===== Menu de celular =====
const botaoMenu = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');

function fecharMenu() {
  menu.classList.remove('menu--aberto');
  botaoMenu.setAttribute('aria-expanded', false);
}

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('menu--aberto');
  botaoMenu.setAttribute('aria-expanded', aberto);
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', fecharMenu);
});

// ===== Foto ampliada =====
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox__img');

function abrirFoto(foto) {
  lightboxImg.src = foto.src;
  lightboxImg.alt = foto.alt;
  lightbox.classList.add('lightbox--aberto');
  document.body.style.overflow = 'hidden';
}

function fecharFoto() {
  lightbox.classList.remove('lightbox--aberto');
  document.body.style.overflow = '';
}

document.querySelectorAll('img.servico__foto, .foto img').forEach(foto => {
  foto.addEventListener('click', () => abrirFoto(foto));
});

lightbox.addEventListener('click', fecharFoto);

document.addEventListener('keydown', evento => {
  if (evento.key === 'Escape') {
    fecharFoto();
    fecharMenu();
  }
});