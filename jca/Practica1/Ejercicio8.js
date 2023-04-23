function sumaArgumentos(...args) {
    return args.reduce((acumulado, actual) => acumulado + actual, 0);
  } 

  console.log(sumaArgumentos(1, 2, 3)); // Resultado: 6