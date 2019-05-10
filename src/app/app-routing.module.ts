import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HeroesAddComponent } from './heroes/heroes-add/heroes-add.component';
import { HeroesEditComponent } from './heroes/heroes-edit/heroes-edit.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';

const routes: Routes = [
  { path: 'heroes/add', component: HeroesAddComponent},
  { path: 'heroes/edit/:id',component: HeroesEditComponent },
  { path: 'heroes',component: HeroesListComponent, data: {preload: true} },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
