import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  notifyChange() {
    
    this.contactsSubject.next(this.contacts)
  }
  contactId:number = 3;
  contacts: Contact[]=[
    {id:'1',name:'ram',email:'ram@gmail.com',phoneNumber:"71/123456"},
    {id:'2',name:'adam',email:'adam@gmail.com',phoneNumber:"70/123456"}
  ];
  private contactsSubject = new BehaviorSubject<Contact[]>(this.contacts);
  constructor() {}

  addContact(newContact: Contact): void {
    //newContact.id = this.contactId++;
    this.contacts.push(newContact);
    console.log(this.contacts)
    this.notifyChange()
  }
 // deleteContact(id: number): void {
   // this.contacts = this.contacts.filter((c) => c.id !== id);
   // this.notifyChange();
 // }
  getContacts(): Observable<Contact[]> {
    return this.contactsSubject.asObservable();
  }
  
  updateContact(contact: Contact) {
    var foundIndex = this.contacts.findIndex((x) => x.id == contact.id);
    this.contacts[foundIndex] = contact;
    this.notifyChange();
  }
 
}
