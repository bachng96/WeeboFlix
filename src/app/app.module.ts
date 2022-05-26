import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GenresBoxComponent } from './layout/genres-box/genres-box.component';
import { CaroselComponent } from './layout/carosel/carosel.component';
import { AnimeFeaturedComponent } from './components/anime-featured/anime-featured.component';
import { SocialMediaComponent } from './layout/social-media/social-media.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './layout/navbar/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresBoxComponent,
    AnimeListComponent,
    AnimeDetailComponent,
    NavbarComponent,
    FooterComponent,
    CaroselComponent,
    AnimeFeaturedComponent,
    SocialMediaComponent,
    HomeComponent,
    LoginFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
