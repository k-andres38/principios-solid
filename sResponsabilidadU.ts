// Ejemplo de Responsabilidad única
class UserInformation {
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
    
  // Métodos para obtener información de usuario

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
}

class Authenticator {
  private user: UserInformation;

  constructor(user: UserInformation) {
    this.user = user;
  }

  authenticate(email: string, password: string): boolean {
    if (this.user.getEmail() === email && this.user.getPassword() === password) {
      return true;
    }
    return false;
  }
}

const user = new UserInformation('Carlos Navarro', 'carlos@gmail.com', 'password123');
const authenticator = new Authenticator(user);
if (authenticator.authenticate('juan@gmail.com', 'password123')) {
  console.log('Usuario autenticado');
} else {
  console.log('Credenciales incorrectas');
}

  