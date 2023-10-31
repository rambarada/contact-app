import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[FilterPipe]
})
export class ContactsComponent  {

}
