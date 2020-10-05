export class Email {
  private i: number = 5;
  id: number;
  formEmail: string;
  toEmail: string;
  subject: string;
  body?: string;

  constructor(formEmail, toEmail, subject, body) {
    this.id = this.i++;
    this.formEmail = formEmail;
    this.toEmail = toEmail;
    this.subject = subject;
    this.body = body;
  }
}
