import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutUsersRoutingModule } from './layoutusers-routing.module';
import {DashboardComponent} from './dashboardUser/dashboard.component';
import {MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule, ToolbarModule} from 'primeng/primeng';
import {LayoutModule} from "../../layout/layout.module";
import { CounteruserComponent } from './counteruser/counteruser.component';



@NgModule({
  declarations: [DashboardComponent, CounteruserComponent],
    imports: [
        CommonModule,
        LayoutUsersRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        AccordionModule,
        ToolbarModule,
        MatButtonModule,
        MenubarModule,
        LayoutModule
    ]
})
export class LayoutusersModule { }
