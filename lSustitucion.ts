// Ejemplo de Sustitución de Liskov
class Animal {
    color(): void {
      console.log('su color es ...');
    }
  
    raza(): void {
      console.log('su raza es ...');
    }
  
    sonido(): void {
      console.log('hace un solido ...');
    }
  }
  
  class Perro extends Animal {
    // Métodos específicos de los perros
    sonido(): void {
      console.log('perro esta ladrando...');
    }
  }
  
  function hacerAlgoClassAnimal(animal: Animal): void {
    // Acciones genéricas que funcionan con cualquier animal
    animal.sonido();
  }
  
  const animal = new Animal();
  const perro = new Perro();
  hacerAlgoClassAnimal(animal);
  hacerAlgoClassAnimal(perro);
  

 
  