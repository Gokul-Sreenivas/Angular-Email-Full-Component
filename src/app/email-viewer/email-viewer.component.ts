import { Component, OnInit } from '@angular/core';
import { EmailInterface } from '../interfaces/email.interface';
import { EmailService } from '../email.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css'],
})
export class EmailViewerComponent implements OnInit {
  emailList: EmailInterface[] = [];

  constructor(private readonly emailService: EmailService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.emailList = emailService.getAllEmails();
  }
  
  value: string;

  qparam1: string;
  qparam2: string;
  newvalue: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.value = params.get('value');
    });
  }
}