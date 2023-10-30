import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalVariables } from 'src/app/globalvariables.ts/global.variables';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit{

  Contactform!: FormGroup;
  
  constructor(private fb: FormBuilder,
    private contactService: ContactService,
    private dialog_ref: MatDialogRef<AddEditContactComponent>){}

    ngOnInit(): void {
      this.Contactform = this.fb.group({
        id: new FormControl(0),
        name: new FormControl('', Validators.required),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(GlobalVariables.emailPattern),
        ]),
        phoneNumber: new FormControl('', Validators.required),
      });
    }

    onCancel() {
      this.dialog_ref.close();
    }

    onSubmit() {
      
        this.contactService.addContact(this.Contactform.value);
        alert('Employee added successfully');
      }
     
}
