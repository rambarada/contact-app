import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { AddEditContactComponent } from '../add-edit-contact/add-edit-contact.component';
import { Firestore, collection, collectionData,updateDoc,doc } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {


  dataSource:any = []
  //contacts:Contact[] = []
  contactsSub !: Subscription;
  displayedColumns: string[] = [ 'name', 'email', 'phone number','action'];

  constructor(private firestoreService : FirestoreService,private _dialog:MatDialog,private firestore : Firestore){}

  ngOnInit(): void {

    this.firestoreService.createRandomContacts();
   this.contactsSub = this.firestoreService.getContacts().subscribe((contacts)=>{
   this.dataSource = new MatTableDataSource(contacts);
   })
    
   }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeleteContact(id:string){

    this.firestoreService.deleteContact(id)

  }
  onUpdateContact(data:Contact){

    this._dialog.open(AddEditContactComponent,{data});
  }
  
  ngOnDestroy(): void {

    this.contactsSub.unsubscribe();
  }

}
