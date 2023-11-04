import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'contactss',
    loadChildren: () =>
      import('./contacts/contacts.module').then((mod) => mod.ContactsModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./error/error.module').then((mod) => mod.ErrorModule),
  },
  { path: 'sign-up', component: SignUpComponent },
  {path:'**',redirectTo:'/sign-up'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
