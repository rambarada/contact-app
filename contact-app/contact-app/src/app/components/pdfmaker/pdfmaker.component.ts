import { Component,OnInit} from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import * as pdfmake from  'pdfmake/build/pdfmake';
import * as pdffonts from  'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { Contact } from 'src/app/models/contact.model';
import { FirestoreService } from 'src/app/services/firestore.service';

(pdfmake.vfs as any) = pdffonts.pdfMake.vfs;

@Component({
  selector: 'app-pdfmaker',
  templateUrl: './pdfmaker.component.html',
  styleUrls: ['./pdfmaker.component.css']
})
export class PdfmakerComponent implements OnInit {

  contacts !: DocumentData[]

  constructor(private firestoreService : FirestoreService){}
  ngOnInit(): void {

    this.firestoreService.getContacts().subscribe((contacts)=>{

      this.contacts = contacts;
      console.log(this.contacts)
    })

  }

dd!:TDocumentDefinitions

  generatePDF(){
    // playground requires you to assign document definition to a variable called dd
 this.dd = {
	content: [
		{text: 'List of contacts', style: 'header'},
		{
			style: 'tableExample',
			table: {
				body:[
          ['name','email','phone number','address'],
          ...this.contacts.map(contact => [contact['name'], contact['email'], contact['phoneNumber'],contact['address']]),
        ] 
			}
    }
	],
	styles: {
		header: {
			fontSize: 18,
			bold: true,
			margin: [0, 0, 0, 10]
		},
		subheader: {
			fontSize: 16,
			bold: true,
			margin: [0, 10, 0, 5]
		},
		tableExample: {
			margin: [0, 5, 0, 15]
		},
		tableHeader: {
			bold: true,
			fontSize: 13,
			color: 'black'
		}
	}
	
}
    pdfmake.createPdf(this.dd).open()
  }

 
}
