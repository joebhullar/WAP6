import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  contacts: any = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('./assets/Contacts.json').subscribe(contact => {
      console.log(contact);
      this.contacts = contact;
    });
    

}

}
