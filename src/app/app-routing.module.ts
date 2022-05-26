import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'details/:id', component: AnimeDetailComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
