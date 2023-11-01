import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditContactComponent } from '../add-edit-contact/add-edit-contact.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private _dialog: MatDialog,public authService : AuthService,private router:Router){}

  onAddEditContactform() {
    this._dialog.open(AddEditContactComponent);

  }
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/login']);
    })
  }
}
