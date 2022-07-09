import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseService } from './course.service';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CoursesComponent, SummaryPipe ],
  providers: [CourseService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
