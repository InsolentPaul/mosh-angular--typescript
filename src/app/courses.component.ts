import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', // <courses>
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
}) // decorator function
export class CoursesComponent {
  // Pascal naming
  title = 'List of courses';
  courses;

  // logic for calling HTTP service
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
