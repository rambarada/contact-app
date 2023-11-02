import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoRootModule } from '../transloco-root.module';


console.warn("contacts module loaded lazily");
@NgModule({
  declarations: [
    ContactsComponent,
    AddEditContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    TranslocoRootModule
  ]
})
export class ContactsModule { }
