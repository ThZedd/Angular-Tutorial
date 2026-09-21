import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greeting',
  styleUrl: './greeting.css',
  templateUrl: './greeting.html',
})
export class Greeting {
  greeting = 'Good Morning'
  @Input() name = '' // Input will let this component receive data from the app parent, i will learn later on how to use signals
}
