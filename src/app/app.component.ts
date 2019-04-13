import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peekiri';

  public clickedevent: Event;

  constructor () {}

  childclickevent (event: Event) {
    this.clickedevent = event;
  }

}
