import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactService } from './services/contact.service';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [

  {path:'',redirectTo:'/sign-up',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'sign-up',component:SignUpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
