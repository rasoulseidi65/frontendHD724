import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComeRoutingModule } from './teacher-come-routing.module';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AccordionModule} from 'primeng/accordion';
import {LayoutModule} from '../layout.module';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {ReactiveFormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [TeacherpageComponent],
  imports: [
    CommonModule,
    TeacherComeRoutingModule,
    ButtonModule,
    InputTextareaModule,
    AccordionModule,
    LayoutModule,
    FileUploadModule,
    ToastModule,
    PanelModule,
    InputTextModule,
    MessageModule,
    ReactiveFormsModule,
    PasswordModule,
  ]
})
export class TeacherComeModule { }


