import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseService } from './course.service';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { ReusablePanelComponent } from './reusable-panel/reusable-panel.component';
import { IfContainerComponent } from './if-container/if-container.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AppInputFormatDirective } from './app-input-format.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CoursesComponent, FavouriteComponent, ReusablePanelComponent, SummaryPipe, TitleCasePipe, IfContainerComponent, NgSwitchComponent, NgForComponent, AppInputFormatDirective ],
  providers: [CourseService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
