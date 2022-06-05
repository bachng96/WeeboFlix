import { ViewMoreListComponent } from './components/view-more-list/view-more-list.component';
import { AnimeByGenresComponent } from './components/anime-by-genres/anime-by-genres.component';
import { AnimeFilterComponent } from './components/anime-filter/anime-filter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { AnimeFilterByLetterComponent } from './components/anime-filter-by-letter/anime-filter-by-letter.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { WatchListComponent } from './components/user/watch-list/watch-list.component';
import { AnimeByTypeComponent } from './components/anime-by-type/anime-by-type.component';
import { WatchComponent } from './components/watch/watch.component';
import { SettingComponent } from './components/user/setting/setting.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: AnimeDetailComponent },
  { path: 'type/:type', component: AnimeByTypeComponent },
  { path: 'genres/:genres', component: AnimeByGenresComponent },
  { path: 'watch/:id', component: WatchComponent },
  { path: 'viewmore/:type', component: ViewMoreListComponent },
  { path: 'az-list', component: AnimeFilterByLetterComponent },
  { path: 'az-list/:key', component: AnimeFilterByLetterComponent },
  { path: 'filter', component: AnimeFilterComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'setting', component: SettingComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'watch-list', component: WatchListComponent },
    ],
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
