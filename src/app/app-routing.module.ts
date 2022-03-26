import { NgModule } from '@angular/core';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';

import {LekarzeComponent} from './lekarze/lekarze.component';
import {PacjenciComponent} from './pacjenci/pacjenci.component';
import {LekiComponent} from './leki/leki.component';
import {ReceptyComponent} from './recepty/recepty.component';

const routes: Routes = [
  { path: 'lekarz-component', component: LekarzeComponent },
  { path: 'pacjenci-component', component: PacjenciComponent },
  { path: 'leki-component', component: LekiComponent },
  { path: 'recepty-component', component: ReceptyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
