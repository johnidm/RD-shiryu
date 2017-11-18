import { Component } from '@angular/core';

declare var Seyia: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  doSubmit(form) {
    console.log(form);
    Seyia.setEmail(form.email);
  }
}
