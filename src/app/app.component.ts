import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XYZ-app';
  constructor(){
    setTimeout(() => {
      this.title = "Best Site";
    }, 2000);
  }
}
