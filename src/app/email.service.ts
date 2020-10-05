import { Injectable } from '@angular/core';

import { Email } from './email.model';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private emails: Email[] = [
    {
      i: 0,
      id: 1,
      formEmail: 'fromemail1@gmail.com',
      toEmail: 'toemail1@gmail.com',
      subject: 'subject1',
      body: 'body1',
    },
    {
      i: 1,
      id: 2,
      formEmail: 'fromemail2@gmail.com',
      toEmail: 'toemail2@gmail.com',
      subject: 'subject2',
      body: 'body2',
    },
    {
      i: 2,
      id: 3,
      formEmail: 'fromemail3@gmail.com',
      toEmail: 'toemail3@gmail.com',
      subject: 'subject3',
      body: 'body3',
    },
    {
      i: 3,
      id: 4,
      formEmail: 'fromemail4@gmail.com',
      toEmail: 'toemail4@gmail.com',
      subject: 'subject4',
      body: 'body4',
    },
    {
      i: 4,
      id: 5,
      formEmail: 'fromemail5@gmail.com',
      toEmail: 'toemail5@gmail.com',
      subject: 'subject5',
      body: 'body5',
    },
  ];

  add(
    formEmail: string,
    toEmail: string,
    subject: string,
    body?: string
  ): Email {
    const e = new Email(formEmail, toEmail, subject, body);
    this.emails.push(e);
    return e;
  }

  getAllEmails() {
    return this.emails;
  }

  removeEmail(id: number): Boolean {
    // this.emails = this.emails.filter(function (email) {
    //   return email.id !== id;
    // });
    console.log(id);
    this.emails = this.emails.filter((email) => email.id !== id);
    return true;
  }

  // emailFilter(formEmail: string): Boolean {
  //   // this.emails = this.emails.filter(function (email) {
  //   //   return email.id !== id;
  //   // });
  //   this.emails = this.emails.filter((email) => email.id !== id);
  //   return true;
  // }
  // getEmailById(formEmail: string): Boolean {
  //   // this.emails = this.emails.filter(function (email) {
  //   //   return email.id !== id;
  //   // });
  //   this.emails = this.emails.filter((email) => email.id !== id);
  //   return true;
  // }
}
