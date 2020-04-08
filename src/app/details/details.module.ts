import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DetailsRoutingModule} from './details-routing.module';
import {DetailsComponent} from './details.component';
import {BodyComponent} from './body/body.component';
import {ArchiveComponent} from './archive/archive.component';
import {CommantsComponent} from './commants/commants.component';


@NgModule({
  declarations: [DetailsComponent, BodyComponent, ArchiveComponent, CommantsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  exports: [DetailsComponent, BodyComponent, ArchiveComponent, CommantsComponent]
})
export class DetailsModule {
}
