import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc,updateDoc,deleteDoc,addDoc } from '@angular/fire/firestore';
import { Contact } from '../models/contact.model';
import { randEmail, randFullName,randPhoneNumber } from '@ngneat/falso';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : Firestore,private auth:Auth ) { }


  getContacts(){

    
    const collectionInstance = collection(this.firestore,'contact');
    return collectionData(collectionInstance,{idField:'id'});

  }

  updateContact(contact:Contact){

    const docInstance = doc(this.firestore,'contact',contact.id);
    const updateData = {
      id:contact.id,
      name: contact.name,
      email:contact.email,
      phoneNumber:contact.phoneNumber
    };
    updateDoc(docInstance,updateData).then(()=>{

      console.log("data updated successfully!")
    }).catch((err)=>{
      console.log("there was an error", err);
    })
  }
  deleteContact(id:string){

    const docInstance = doc(this.firestore,'contact',id);
    deleteDoc(docInstance);

  }
  createContact(contact:Contact){
    
    const collectionInstance = collection(this.firestore,'contact');
    const newContact = {
      name: contact.name,
      email: contact.email,
      phoneNumber : contact.phoneNumber
    }
    addDoc(collectionInstance,newContact);
  }

  createRandomContacts(){

    const collectionInstance = collection(this.firestore,'contact');
    for(var i =0; i<2; i++){
      const contact = { email: randEmail(), name: randFullName(),phoneNumber:randPhoneNumber({ countryCode: 'LB' }) };
      addDoc(collectionInstance,contact);
    }
    
  }
 
}
