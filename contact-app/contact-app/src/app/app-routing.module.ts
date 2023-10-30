import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactService } from './services/contact.service';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [

  {path:'',component:ContactsComponent,pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
