

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
