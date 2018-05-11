import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  show = false;
  displayBtn = 'Populate';
  populate() {
    this.show = !this.show;
    this.displayBtn = 'Hide';
  }
}