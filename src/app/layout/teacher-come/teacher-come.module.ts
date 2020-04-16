import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherComeRoutingModule } from './teacher-come-routing.module';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AccordionModule} from 'primeng/accordion';
import {LayoutModule} from '../layout.module';


@NgModule({
  declarations: [TeacherpageComponent],
  imports: [
    CommonModule,
    TeacherComeRoutingModule,
    ButtonModule,
    InputTextareaModule,
    AccordionModule,
    LayoutModule
  ]
})
export class TeacherComeModule { }
