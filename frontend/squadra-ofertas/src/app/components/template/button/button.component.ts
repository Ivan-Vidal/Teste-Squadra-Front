import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() type!: 'flat' | 'icon' | 'card' | 'pay' | 'close';
  @Input() label!: string;
  @Input() counter!: number;
  constructor() { }

  ngOnInit(): void {
    
 
  }

}
