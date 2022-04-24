import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() type!: 'flat' | 'icon' | 'card' | 'pay';
  @Input() label!: string;
  @Input() counter: any;
  constructor() { }

  ngOnInit(): void {
    
    if (this.counter === 0) {
      this.counter = ''
    } 
  }

}
