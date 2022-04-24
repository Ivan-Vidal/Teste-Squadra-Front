import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.css']
})
export class ModalRemoveComponent implements OnInit {
  yesRemove: any
  constructor() { }

  ngOnInit(): void {
  }
  

  remove() {
    this.yesRemove = true
  }

}
