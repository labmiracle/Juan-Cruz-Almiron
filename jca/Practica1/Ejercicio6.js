const carrito = {
    productos: [],
    
    agregarProducto: function(nombre, unidades, precio) {
      this.productos.push({
        nombre: nombre,
        unidades: unidades,
        precio: precio
      });
    },
    
    calcularPrecioTotal: function() {
      if (this.productos.length === 0) {
        return 0;
      }
      
      return this.productos.reduce(function(total, producto) {
        return total + (producto.unidades * producto.precio);
      }, 0);
    }
  };
  
  // Agregar algunos productos al carrito
  carrito.agregarProducto('papel higienico', 4, 5);
  carrito.agregarProducto('chocolate', 2, 1.5);
  
  // Calcular el precio total
  console.log(carrito.calcularPrecioTotal()); // Salida esperada: 23