const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function adivinarNumero(nivel) {
  // Seleccionar el rango de números según el nivel
  let min, max;
  switch (nivel) {
    case 1:
      min = 1;
      max = 10;
      break;
    case 2:
      min = 1;
      max = 50;
      break;
    case 3:
      min = 1;
      max = 100;
      break;
    default:
      console.log("Nivel no válido");
      return;
  }

  // Generar número aleatorio
  const numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
  let intentos = 0;
  let adivinado = false;

  function pedirNumero() {
    rl.question(`Adivina el número! (${min}-${max}): `, (input) => {
      const numeroAdivinado = parseInt(input);
      if (isNaN(numeroAdivinado) || numeroAdivinado < min || numeroAdivinado > max) {
        console.log("Número inválido. Inténtalo de nuevo.");
        pedirNumero();
      } else {
        verificarNumero(numeroAdivinado);
      }
    });
  }

  function verificarNumero(numeroAdivinado) {
    // Verificar si el usuario adivinó el número
    if (numeroAdivinado === numeroSecreto) {
      console.log(`¡Felicidades, adivinaste el número en ${intentos + 1} intentos!`);
      rl.close();
    } else {
      // Dar una pista si el número es mayor o menor
      if (numeroAdivinado < numeroSecreto) {
        console.log("El número es mayor");
      } else {
        console.log("El número es menor");
      }

      intentos++;
      pedirNumero();
    }
  }

  pedirNumero();
}

// Pedir al usuario que seleccione el nivel de dificultad
rl.question("Selecciona el nivel de dificultad (1-3): ", (input) => {
  const nivel = parseInt(input);
  adivinarNumero(nivel);
});