import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";


@Component({
  selector: 'app-courses',
  template: `<h2>Courses</h2>
  <p>My courses</p>
  <ul>
    <li *ngFor="let course of courses">{{ course }}</li>
  </ul>
  `
})

export class CoursesComponent implements OnInit {

  courses;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }
}