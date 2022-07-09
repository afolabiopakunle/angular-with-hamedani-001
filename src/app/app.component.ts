import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  color: boolean;
  liked: boolean;

  email = event.currentTarget as HTMLInputElement;

  changeColor() {
    this.color = !this.color;
  }

  onKeyUp() {
    console.log(this.email)
  }

  returnLike() {
    this.liked = !this.liked;
  }
}
