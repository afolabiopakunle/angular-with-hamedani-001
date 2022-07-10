import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-container',
  templateUrl: './if-container.component.html',
  styleUrls: ['./if-container.component.css']
})
export class IfContainerComponent implements OnInit {

  students = [];
  
  constructor() { }

  ngOnInit() {
  }

}