

const frases = [
  "Acolher é transformar vidas.",
  "Cada passo na aprendizagem importa.",
  "Respeito e empatia mudam o mundo.",
  "Aprender é crescer juntos.",
  "CAAPA: aprender, acolher, transformar."
];

let index = 0;
const fraseElemento = document.getElementById("frase");

setInterval(() => {
  fraseElemento.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % frases.length;
    fraseElemento.textContent = frases[index];
    fraseElemento.style.opacity = 1;
  }, 500);
}, 4000);

// seleciona todos os cards
const cards = document.querySelectorAll('.card');

// cria o observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting && window.innerWidth <= 768){ // só celular
      entry.target.classList.add('hover'); // aplica o efeito hover
    } else {
      entry.target.classList.remove('hover'); // remove quando sai da tela
    }
  });
}, {
  threshold: 0.5 // dispara quando 50% do card está visível
});

// observa cada card
cards.forEach(card => observer.observe(card));
