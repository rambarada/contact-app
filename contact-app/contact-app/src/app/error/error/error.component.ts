import { Component ,OnDestroy,OnInit} from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit,OnDestroy{
  
  constructor(private router:Router){}

  ngOnDestroy(): void {
  } 
  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },2000)
    
  }
  
}