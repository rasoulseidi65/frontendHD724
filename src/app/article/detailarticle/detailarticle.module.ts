import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailarticleRoutingModule } from './detailarticle-routing.module';
import { DetailarticleComponent } from './detailarticle.component';


@NgModule({
  declarations: [DetailarticleComponent,],
  imports: [
    CommonModule,
    DetailarticleRoutingModule
  ]
})
export class DetailarticleModule { }
