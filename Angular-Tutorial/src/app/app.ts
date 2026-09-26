import { Component } from '@angular/core';
import { Greeting } from './greeting/greeting';
import { Card } from './card/card';
import { UserCard } from './user-card/user-card';

@Component({
  imports: [Greeting, Card, UserCard], // we need to add every component we use to the imports
  selector: 'app-root', // gives our component a html tag
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  name = 'Angular';

  likeCount = 0;
  isFollowingAll: boolean = false;
  avatarUrl: string = 'https://picsum.photos/200';

  followAllCount: number = 0;

  typedName: string = '';

  photoMessage: string = '';

  user1 = {
    name:'John',
    role: 'Front-End Developer',
    bio: 'Its John'
  }

  user2 = {
    name:'Jacob',
    role: 'Back-End Developer',
    bio: 'Its Jacob'
  }

  onLiked(){
    this.likeCount++;
  }

  message = '';
  onFollowed(name: string){
    this.message = "You are now following " + name;
  }

  onFollowAll(){
    this.followAllCount++;
  }

  onType(event: Event){
    this.typedName = (event.target as HTMLInputElement).value
  }

  onMouseOver(){
    this.photoMessage = 'Hello';
  }

  onPhotoLeave(){
    this.photoMessage = '';
  }
}
