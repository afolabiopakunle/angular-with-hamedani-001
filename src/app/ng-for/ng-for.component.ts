import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  courses = [
    {id: 1, name: 'Course 1'},
    {id: 1, name: 'Course 2'},
    {id: 1, name: 'Course 3'},
    {id: 1, name: 'Course 4'},
    {id: 1, name: 'Course 5'},
    {id: 1, name: 'Course 6'},
    {id: 1, name: 'Course 7'},
    {id: 1, name: 'Course 8'},
    {id: 1, name: 'Course 9'},
  ]
  constructor() { }

  ngOnInit() {
  }

}