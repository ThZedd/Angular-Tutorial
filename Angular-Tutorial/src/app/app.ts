import { Component } from '@angular/core';
import { Greeting } from './greeting/greeting';
import { Card } from './card/card';

@Component({
  imports: [Greeting, Card], // we need to add every component we use to the imports
  selector: 'app-root', // gives our component a html tag
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  name = 'Angular';

  likeCount = 0;

  onLiked(){
    this.likeCount += 1;
  }
}
