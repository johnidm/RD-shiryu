import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

declare var Seyia: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Contact');
  }

  doSubmit(form) {
    Seyia().setEmail(form.value.email);
  }

}
