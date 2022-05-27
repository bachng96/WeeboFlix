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
import { GenresBoxComponent } from './layout/genres-box/genres-box.component';
import { SliderComponent } from './layout/slider/slider.component';
import { MostviewBoxComponent } from './layout/mostview-box/mostview-box.component';
import { CaroselComponent } from './layout/carosel/carosel.component';
import { AnimeFeaturedComponent } from './components/anime-featured/anime-featured.component';
import { SocialMediaComponent } from './layout/social-media/social-media.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './layout/navbar/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './share/toast/toast.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { WatchListComponent } from './components/watch-list/watch-list.component';

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
    WatchListComponent,
    ToastComponent,
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
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
