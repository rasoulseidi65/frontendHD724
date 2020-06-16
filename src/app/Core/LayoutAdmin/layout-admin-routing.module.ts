import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContentdashboardComponent} from './contentdashboard/contentdashboard.component';
import {NewpaperComponent} from './paper/newpaper/newpaper.component';
import {PaperlistComponent} from './paper/paperlist/paperlist.component';
import {NewteacherComponent} from './teacher/newteacher/newteacher.component';
import {TeacherlistComponent} from './teacher/teacherlist/teacherlist.component';
import {NewcoursesComponent} from './Courses/newcourses/newcourses.component';
import {ListcoursesComponent} from './Courses/listcourses/listcourses.component';
import {UserslistComponent} from './users/userslist/userslist.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: '',
      component: ContentdashboardComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'newpaper',
      component: NewpaperComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'paperlist',
      component: PaperlistComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'newTeacher',
      component: NewteacherComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'listTeacher',
      component: TeacherlistComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'newCourses',
      component: NewcoursesComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'listCourses',
      component: ListcoursesComponent
    }]
  }
  ,
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'listUsers',
      component: UserslistComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule {
}
