function palabraMasLarga(str) {
    let palabras = str.match(/[a-zA-Z]+/g); 
    let maxLen = 0;
    let palabraMasLarga = '';
    
    palabras.forEach(palabra => {
      if (palabra.length > maxLen) {
        maxLen = palabra.length;
        palabraMasLarga = palabra;
      } else if (palabra.length === maxLen) { 
        palabraMasLarga += `, ${palabra}`;
      }
    });
    
    return { palabra: palabraMasLarga, longitud: maxLen };
  }


  console.log(palabraMasLarga('Python es definitivamente mejor lenguaje')); // debería imprimir "definitivamente" con una longitud de 15

  function primeraMayuscula(str) {
    if (!str.trim()) {
      return '';
    }
    
    let palabras = str.toLowerCase().split(' ');
    
    palabras = palabras.map(palabra => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    
    return palabras.join(' ');
  }

  console.log(primeraMayuscula('hola mundo')); // debería imprimir "Hola Mundo"