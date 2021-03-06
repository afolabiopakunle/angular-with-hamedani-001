import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input() liked: boolean;
  @Output() sendLike = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  likeClicked() {
    this.sendLike.emit()
  }

}