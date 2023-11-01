import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !:FormGroup; 

  constructor(private fb: FormBuilder,private authService: AuthService,private router:Router,private toast:HotToastService){}
  ngOnInit(): void {

    this.loginForm = this.fb.group({

      username: new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",Validators.required)
    })
  }

  onLogin(){

    const {username,password} = this.loginForm.value;
    console.log("username: ",username,"password: ",password);
    this.authService.login(username,password).subscribe(()=>{
      alert("Logged In Successfully!")
      this.router.navigate(['/contacts'])
    })
  }

  get email(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
}
