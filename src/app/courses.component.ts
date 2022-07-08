import { Component } from "@angular/core";


@Component({
  selector: 'app-courses',
  template: `<h2>Courses</h2>
  <p>My courses</p>
  <ul>
    <li *ngFor="let course of courses">{{ course }}</li>
  </ul>
  `
})

export class CoursesComponent {

  courses = ['course1', 'course2', 'course3']
}