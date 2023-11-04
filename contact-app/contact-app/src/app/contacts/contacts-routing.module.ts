import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { PdfmakerComponent } from '../components/pdfmaker/pdfmaker.component';

const routes: Routes = [
  {path:'',component:ContactsComponent,children:[{
    path:'',component:PdfmakerComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
