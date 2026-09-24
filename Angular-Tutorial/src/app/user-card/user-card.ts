import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  @Input() name = '';
  @Input() role = '';
  @Input() bio = '';

  @Output() follow = new EventEmitter<string>();
  onFollow(){
    this.follow.emit(this.name);
  }
}
