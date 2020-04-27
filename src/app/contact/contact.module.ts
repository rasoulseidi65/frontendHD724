import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {LayoutModule} from '../layout/layout.module';
import {ButtonModule} from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {ReactiveFormsModule} from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    LayoutModule,
    ButtonModule,
    MessageModule,
    InputTextModule,
    ToastModule,
    PanelModule,
    ReactiveFormsModule,
    InputTextareaModule,
    DropdownModule
  ]
})
export class ContactModule { }
