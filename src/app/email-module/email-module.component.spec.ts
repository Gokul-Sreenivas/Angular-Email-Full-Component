import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailModuleComponent } from './email-module.component';

describe('EmailModuleComponent', () => {
  let component: EmailModuleComponent;
  let fixture: ComponentFixture<EmailModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
