import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() eventclicked = new EventEmitter<any>();

  wasclicked = false;

  constructor() { }

  ngOnInit() {
  }

  headerbutton() {
    this.wasclicked = !this.wasclicked;
    this.eventclicked.emit(this.wasclicked);
  }

}
