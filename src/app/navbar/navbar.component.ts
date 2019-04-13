import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { DataService } from '../data.service';
import { trigger, state, style, stagger, animate, transition, query } from '@angular/animations'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({
        display: 'none',
        transform: 'translateX(-100%)'
      })),
      state('true',   style({
        display: 'block',
        transform: 'translateX(0px)'
      })),
      transition('true => false', animate('300ms ease-in')),
      transition('false => true', animate('300ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  menu$: Object;
  
  @Input() isOpen = false;

  collapse:any = false;

  @Input()
  set event(val: Event) {
    this.collapse = val;
  }

  constructor(private data: DataService ) { }

  ngOnInit() {
    return this.data.getMenu().subscribe(
      data => this.menu$ = data
    )
  }

}
