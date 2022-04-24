import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  goCart() {
    this.route.navigate(['cart'])
    
  }

}
