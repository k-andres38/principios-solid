// Ejemplo de Abierto/Cerrado
abstract class Forma {
  abstract calculateArea(): number;
}

class Cuadrado extends Forma {
  constructor(private width: number) {
    super();
  }

  calculateArea() {
    return this.width ** 2;
  }
}

class Circulo extends Forma {
  constructor(private radius: number) {
    super();
  }

  calculateArea() {
    return Math.PI * (this.radius ** 2);
  }
}

const square = new Cuadrado(5);
console.log(square.calculateArea());

const circle = new Circulo(3);
console.log(circle.calculateArea());


  