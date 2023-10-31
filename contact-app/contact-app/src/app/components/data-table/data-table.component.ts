import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { AddEditContactComponent } from '../add-edit-contact/add-edit-contact.component';
import { ContactService } from 'src/app/services/contact.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers:[FilterPipe]
})
export class DataTableComponent implements OnInit {

  dataSource:any = []
  //contacts:Contact[] = []
  contactsSub !: Subscription;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone number','action'];

  constructor(private contactService : ContactService,private _dialog:MatDialog,private filterPipe : FilterPipe){}

  ngOnInit(): void {

    console.log("entered!")
    this.contactsSub = this.contactService.getContacts().subscribe((contacts:Contact[])=>{
     // this.contacts = contacts;
     this.dataSource = new MatTableDataSource(contacts);
    })
    
   }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //console.log("pipe output:",this.filterPipe.transform(this.dataSource,filterValue.trim().toLowerCase()));
  }

  onDeleteContact(id:number){

    this.contactService.deleteContact(id);
  }
  onUpdateContact(data:Contact){
    
    this._dialog.open(AddEditContactComponent,{
      data
    });

  }


  ngOnDestroy(): void {

    this.contactsSub.unsubscribe();
  }

}
