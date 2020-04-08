import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailarticleComponent} from './detailarticle/detailarticle.component';


const routes: Routes = [
  {
    path: '',
    component: DetailarticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {
}
