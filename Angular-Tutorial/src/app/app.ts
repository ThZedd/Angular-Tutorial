import { Component } from '@angular/core';
import { Greeting } from './greeting/greeting';

@Component({
  imports: [Greeting], // we need to add every component we use to the imports
  selector: 'app-root', // gives our component a html tag
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name = 'Angular';
}
