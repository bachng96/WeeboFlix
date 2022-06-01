import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GenresBoxComponent } from './share/genres-box/genres-box.component';
import { SliderComponent } from './layout/slider/slider.component';
import { MostviewBoxComponent } from './share/mostview-box/mostview-box.component';
import { CaroselComponent } from './layout/carosel/carosel.component';
import { AnimeFeaturedComponent } from './components/anime-featured/anime-featured.component';
import { SocialMediaComponent } from './share/social-media/social-media.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './layout/navbar/login-form/login-form.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { WatchListComponent } from './components/user/watch-list/watch-list.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './share/spinner/spinner.component';
import { ToastsContainerComponent } from './share/toasts-container/toasts-container.component';
import { AnimeByTypeComponent } from './components/anime-by-type/anime-by-type.component';
import { TimeBoxComponent } from './share/time-box/time-box.component';
import { AnimeFilterByLetterComponent } from './components/anime-filter-by-letter/anime-filter-by-letter.component';
import { AnimeFilterComponent } from './components/anime-filter/anime-filter.component';
import { WatchComponent } from './components/watch/watch.component';
import { ButtonComponent } from './share/button/button.component';
import { ToggleComponent } from './share/toggle/toggle.component';
import { AnimeByGenresComponent } from './components/anime-by-genres/anime-by-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresBoxComponent,
    AnimeListComponent,
    AnimeDetailComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    MostviewBoxComponent,
    CaroselComponent,
    AnimeFeaturedComponent,
    SocialMediaComponent,
    HomeComponent,
    LoginFormComponent,
    UserComponent,
    ProfileComponent,
    WatchListComponent,
    SpinnerComponent,
    AnimeFilterByLetterComponent,
    AnimeFilterComponent,
    ToastsContainerComponent,
    AnimeByTypeComponent,
    TimeBoxComponent,
    WatchComponent,
    ButtonComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgbCarouselModule,
    SwiperModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
