// Ejemplo de Inversión de Dependencia
interface Sender {
  send(recipient: string, subject: string, message: string): void;
}

class EmailSender implements Sender {
  public send(recipient: string, subject: string, message: string): void {
    // Lógica para enviar un correo electrónico
  }
}

class NotificationService {
  private sender: Sender;

  constructor(sender: Sender) {
    this.sender = sender;
  }

  public sendNotification(user: { email: string }, message: string): void {
    // Lógica para enviar una notificación utilizando el sender
    this.sender.send(user.email, 'Nueva notificación', message);
  }
}

// Crear una instancia de EmailSender y pasársela a NotificationService
const emailSender: Sender = new EmailSender();
const notificationService: NotificationService = new NotificationService(emailSender);

// Utilizar NotificationService para enviar una notificación
notificationService.sendNotification({ email: 'example@example.com' }, '¡Tienes una nueva notificación!');

  