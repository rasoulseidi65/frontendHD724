import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatButtonModule, MatIconModule, MatListModule, MatRadioModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';
import {
  DialogModule,
  DropdownModule, EditorModule,
  FieldsetModule, FileUploadModule, InputTextareaModule,
  InputTextModule, KeyFilterModule,
  MessageModule,
  OverlayPanelModule,
  PanelModule, PasswordModule,
  SplitButtonModule,
  ToolbarModule
} from 'primeng/primeng';
import { ContentdashboardComponent } from './contentdashboard/contentdashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {QuillModule} from 'ngx-quill';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {NewpaperComponent} from './paper/newpaper/newpaper.component';
import { PaperlistComponent } from './paper/paperlist/paperlist.component';
import {TableModule} from 'primeng/table';
import { NewteacherComponent } from './teacher/newteacher/newteacher.component';
import { TeacherlistComponent } from './teacher/teacherlist/teacherlist.component';




@NgModule({
  declarations: [DashboardComponent, ContentdashboardComponent,NewpaperComponent, PaperlistComponent, NewteacherComponent, TeacherlistComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    LayoutAdminRoutingModule,
    MatButtonModule,
    AccordionModule,
    ToolbarModule,
    SplitButtonModule,
    OverlayPanelModule,
    PanelModule,
    InputTextModule,
    FieldsetModule,
    MatRadioModule,
    ReactiveFormsModule,
    ToastModule,
    MessageModule,
    DropdownModule,
    InputTextareaModule,
    EditorModule,
    DpDatePickerModule,
    QuillModule.forRoot(),
    FileUploadModule,
    TableModule,
    DialogModule,
    PasswordModule,
    KeyFilterModule
  ],

  exports:[DashboardComponent]
})
export class LayoutAdminModule { }
