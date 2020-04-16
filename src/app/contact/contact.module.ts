import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {LayoutModule} from '../layout/layout.module';


@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    LayoutModule
  ]
})
export class ContactModule { }
