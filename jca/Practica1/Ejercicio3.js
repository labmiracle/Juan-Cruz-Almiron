function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let alturaActual = 0;
    let dias = 0;
    
    while (alturaActual < alturaDeseada) {
      dias++;
      alturaActual += velocidadCrecimiento;
      
      if (alturaActual < alturaDeseada) {
        alturaActual -= velocidadDecrecimiento;
      }
      else {
        break;
      }
    }
    
    return dias;
  }

  console.log(calcularDiasCrecimiento(2, 1, 10)); // Devuelve 9