import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greeting',
  styleUrl: './greeting.css',
  templateUrl: './greeting.html',
})
export class Greeting {
  greeting = 'Good Morning'
  @Input() name = '' // Input will let this component receive data from the app parent, i will learn later on how to use signals

  @Output() liked = new EventEmitter<void>() // Output will send the data from the child to his parent and EventEmitter will notify the parent that the event happened, we set it has <void> because we are not sending any DATA
  onLiked(){
    this.liked.emit(); // emit is the event 
  }
}
