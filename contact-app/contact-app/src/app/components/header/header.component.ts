import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditContactComponent } from '../add-edit-contact/add-edit-contact.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private _dialog: MatDialog){}

  onAddEditContactform() {
    this._dialog.open(AddEditContactComponent);
  }
}
