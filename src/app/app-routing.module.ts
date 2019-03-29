import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesAddComponent } from './heroes-add/heroes-add.component';
import { HeroesEditComponent } from './heroes-edit/heroes-edit.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  { path: 'heroes/add', component: HeroesAddComponent },
  { path: 'heroes/edit/:id',component: HeroesEditComponent },
  { path: 'heroes',component: HeroesListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
