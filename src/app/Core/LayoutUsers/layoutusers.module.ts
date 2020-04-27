import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutUsersRoutingModule } from './layoutusers-routing.module';
import {DashboardComponent} from './dashboardUser/dashboard.component';
import {MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule, ToolbarModule} from 'primeng/primeng';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LayoutUsersRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AccordionModule,
    ToolbarModule,
    MatButtonModule,
    MenubarModule
  ]
})
export class LayoutusersModule { }
