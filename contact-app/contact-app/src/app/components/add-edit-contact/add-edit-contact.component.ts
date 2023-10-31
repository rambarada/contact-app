import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GlobalVariables } from 'src/app/globalvariables.ts/global.variables';
import { Contact } from 'src/app/models/contact.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit{

  Contactform!: FormGroup;
  
  constructor(private fb: FormBuilder,
    private firestoreService : FirestoreService,
    private dialog_ref: MatDialogRef<AddEditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact){}

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
      this.Contactform.patchValue(this.data);
    }

    onCancel() {
      this.dialog_ref.close();
    }

    onSubmit() {
      if (this.data) {
        this.firestoreService.updateContact(this.Contactform.value);
        alert('Employee Updated successfully');
      } else {
        this.firestoreService.createContact(this.Contactform.value);
        alert('Employee added successfully');
      }
      this.Contactform.reset();
      this.dialog_ref.close();
    }
     
}
