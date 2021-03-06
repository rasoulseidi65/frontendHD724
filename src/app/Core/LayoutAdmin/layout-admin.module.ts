import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutAdminRoutingModule} from './layout-admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatButtonModule, MatIconModule, MatListModule, MatRadioModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';
import {
  DialogModule,
  DropdownModule, EditorModule,
  FieldsetModule, FileUploadModule, InputMaskModule, InputTextareaModule,
  InputTextModule, KeyFilterModule, MenubarModule,
  MessageModule,
  OverlayPanelModule,
  PanelModule, PasswordModule,
  SplitButtonModule,
  ToolbarModule, TreeTableModule
} from 'primeng/primeng';
import {ContentdashboardComponent} from './contentdashboard/contentdashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {QuillModule} from 'ngx-quill';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {NewpaperComponent} from './paper/newpaper/newpaper.component';
import {PaperlistComponent} from './paper/paperlist/paperlist.component';
import {TableModule} from 'primeng/table';
import {NewteacherComponent} from './teacher/newteacher/newteacher.component';
import {TeacherlistComponent} from './teacher/teacherlist/teacherlist.component';
import {NewcoursesComponent} from './Courses/newcourses/newcourses.component';
import {ListcoursesComponent} from './Courses/listcourses/listcourses.component';
import {IRCurrencyPipe} from 'ngx-persian';
import { UserslistComponent } from './users/userslist/userslist.component';


@NgModule({
  declarations: [IRCurrencyPipe, DashboardComponent, ContentdashboardComponent, NewpaperComponent, PaperlistComponent, NewteacherComponent, TeacherlistComponent, NewcoursesComponent, ListcoursesComponent, UserslistComponent],
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
    KeyFilterModule,
    InputMaskModule,
    MenubarModule,
    TreeTableModule,

  ],

  exports: [DashboardComponent]
})
export class LayoutAdminModule {
}
