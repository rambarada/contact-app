import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AddEditContactComponent } from 'src/app/contacts/add-edit-contact/add-edit-contact.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private _dialog: MatDialog,public authService : AuthService,private router:Router,private translocoService:TranslocoService){}

  onAddEditContactform() {
    this._dialog.open(AddEditContactComponent);

  }
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/login']);
    })
  }
  onChangeLang(){

    //console.log("active lang: ",this.translocoService.getActiveLang())
    this.translocoService.setActiveLang(this.translocoService.getActiveLang()=='de)'?'(en':'de)');
  }
}
