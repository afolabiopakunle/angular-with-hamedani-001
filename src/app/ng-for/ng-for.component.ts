import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  newCourse: string;
  courses: any = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    // {id: 3, name: 'Course 3'},
    // {id: 4, name: 'Course 4'},
    // {id: 5, name: 'Course 5'},
    // {id: 6, name: 'Course 6'},
    // {id: 7, name: 'Course 7'},
    // {id: 8, name: 'Course 8'},
    // {id: 9, name: 'Course 9'},
  ];
  constructor() {}

  ngOnInit() {}

  deleteCourse(course) {
    let item = this.courses.indexOf(course);
    this.courses.splice(item, 1);
    console.log(this.courses);
  }

  updateCourses() {
    console.log(this.newCourse)
    if (this.newCourse !== '' || null || undefined) {
      this.courses.push({
        id: this.courses.length + 1,
        name: this.newCourse + ' ' + (Number(this.courses.length) + 1),
      });
      this.newCourse = '';
    }
  }

  conlog() {
    console.log(this.courses);
  }
}
