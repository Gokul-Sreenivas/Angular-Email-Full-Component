import { Component, OnInit } from '@angular/core';

import { EmailInterface } from '../interfaces/email.interface';
import { EmailService } from '../email.service';
// import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css'],
})
export class EmailListComponent implements OnInit {
  emailList: EmailInterface[] = [];

  constructor(private readonly emailService: EmailService) {
    this.emailList = emailService.getAllEmails();
  }

  ngOnInit(): void {}

  removeEmail(id) {
    // console.log(id);
    this.emailService.removeEmail(id);
    this.emailList = this.emailService.getAllEmails();
  }
}
