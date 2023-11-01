import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators,ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export function passwordsMatchValidator():ValidatorFn{

  return(control: AbstractControl): ValidationErrors | null=>{
    
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password!==confirmPassword){
      return{
        passwordsDontMatch: true
      }
    }
    return null;
  };
}



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm !:FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router ){}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name : new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",Validators.required),
      confirmPassword : new FormControl("",Validators.required)
    },{Validators: passwordsMatchValidator()})
  }

  onSignUp(){

    const {name,email,password} = this.signUpForm.value;
    this.authService.signUp(name,email,password).subscribe(()=>{
      alert('user register successfully!')
      this.router.navigate(['/contacts']);
    })
  }

  get name(){

   return this.signUpForm.get('name');
  }
  get email(){

    return this.signUpForm.get('email');
   }
   get password(){

    return this.signUpForm.get('password');
   }
   get confirmPassword(){

    return this.signUpForm.get('confirmPassword');
   }
}


