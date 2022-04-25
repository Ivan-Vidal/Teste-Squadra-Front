import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  
  constructor(private route : Router) { }
  
  ngOnInit(): void {
  }
  
  goHome() {
    this.route.navigate(['/home'])
  }
  
}
