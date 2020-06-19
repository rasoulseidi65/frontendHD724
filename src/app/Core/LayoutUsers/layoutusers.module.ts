import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutUsersRoutingModule } from './layoutusers-routing.module';
import {DashboardComponent} from './dashboardUser/dashboard.component';
import {MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule, ToolbarModule} from 'primeng/primeng';
import {LayoutModule} from "../../layout/layout.module";
import { CounteruserComponent } from './counteruser/counteruser.component';
import { MyProductsComponent } from './Condition/my-products/my-products.component';
import { MyPurchasesComponent } from './condition/my-purchases/my-purchases.component';
import { MyCoursesComponent } from './condition/my-courses/my-courses.component';
import { MySalesComponent } from './condition/my-sales/my-sales.component';



@NgModule({
  declarations: [DashboardComponent, CounteruserComponent, MyProductsComponent, MyPurchasesComponent, MyCoursesComponent, MySalesComponent],
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
