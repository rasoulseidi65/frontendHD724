import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';
import {OverlayPanelModule, PanelModule, SplitButtonModule, ToolbarModule} from 'primeng/primeng';
import { ContentdashboardComponent } from './contentdashboard/contentdashboard.component';



@NgModule({
  declarations: [DashboardComponent, ContentdashboardComponent],
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
  ],
  exports:[DashboardComponent]
})
export class LayoutAdminModule { }
