import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import {DetailarticleComponent} from './detailarticle/detailarticle.component';
import {ContentCommentsComponent} from './detailarticle/content-comments/content-comments.component';
import {ContentArchiveComponent} from './detailarticle/content-archive/content-archive.component';
import {ContentBodyComponent} from './detailarticle/content-body/content-body.component';
import {LayoutModule} from '../layout/layout.module';


@NgModule({
  declarations: [DetailarticleComponent, ContentCommentsComponent, ContentArchiveComponent, ContentBodyComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    LayoutModule
  ]
})
export class ArticleModule { }
