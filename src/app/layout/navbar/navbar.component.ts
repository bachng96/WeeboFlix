import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnimeService } from 'src/app/core/services/anime.service';
import { UserService } from 'src/app/core/services/user.service';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) {}
  listGenre;
  toggleUser: boolean = false;
  toggle: boolean = false;
  ngOnInit(): void {
    const parsedUrl = new URL(window.location.href);
    const baseUrl = parsedUrl.origin;
    console.log(baseUrl);

    this.userService.toggleNavbar.subscribe((res) => {
      if (res) {
        this.open();
      }
    });
  }

  getRandomAnime() {
    this.animeService.getRandomAnime().subscribe((data) => {
      let id = data['data']['mal_id'];
      this.router.navigate(['details', id]);
    });
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  close(event) {
    event.stopPropagation();
    this.toggle = false;
  }

  open() {
    const modalRef = this.modalService.open(LoginFormComponent);
    modalRef.componentInstance.name = 'World';
  }
  logout() {
    this.toggleUser = false;
    this.userService.logout();
    this.router.navigateByUrl('/');
  }
  gotoProfile() {
    this.toggleUser = false;
    this.router.navigateByUrl('/user/profile');
  }

  data: {
    mal_id: 10465;
    url: 'https://myanimelist.net/anime/10465/Manyuu_Hikenchou';
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/9/75184.jpg';
        small_image_url: 'https://cdn.myanimelist.net/images/anime/9/75184t.jpg';
        large_image_url: 'https://cdn.myanimelist.net/images/anime/9/75184l.jpg';
      };
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/9/75184.webp';
        small_image_url: 'https://cdn.myanimelist.net/images/anime/9/75184t.webp';
        large_image_url: 'https://cdn.myanimelist.net/images/anime/9/75184l.webp';
      };
    };
    trailer: {
      youtube_id: 'S70XNxvvBHY';
      url: 'https://www.youtube.com/watch?v=S70XNxvvBHY';
      embed_url: 'https://www.youtube.com/embed/S70XNxvvBHY?enablejsapi=1&wmode=opaque&autoplay=1';
      images: {
        image_url: 'https://img.youtube.com/vi/S70XNxvvBHY/default.jpg';
        small_image_url: 'https://img.youtube.com/vi/S70XNxvvBHY/sddefault.jpg';
        medium_image_url: 'https://img.youtube.com/vi/S70XNxvvBHY/mqdefault.jpg';
        large_image_url: 'https://img.youtube.com/vi/S70XNxvvBHY/hqdefault.jpg';
        maximum_image_url: 'https://img.youtube.com/vi/S70XNxvvBHY/maxresdefault.jpg';
      };
    };
    title: 'Manyuu Hikenchou';
    title_english: 'Magic Breast Secret Sword Scroll';
    title_japanese: '魔乳秘剣帖';
    title_synonyms: [];
    type: 'TV';
    source: 'Manga';
    episodes: 12;
    status: 'Finished Airing';
    airing: false;
    aired: {
      from: '2011-07-11T00:00:00+00:00';
      to: '2011-09-26T00:00:00+00:00';
      prop: {
        from: {
          day: 11;
          month: 7;
          year: 2011;
        };
        to: {
          day: 26;
          month: 9;
          year: 2011;
        };
      };
      string: 'Jul 11, 2011 to Sep 26, 2011';
    };
    duration: '24 min per ep';
    rating: 'R+ - Mild Nudity';
    score: 6.19;
    scored_by: 23026;
    rank: 8021;
    popularity: 2192;
    members: 69619;
    favorites: 220;
    synopsis: "The Edo period of Japan gave rise to a clan of warriors with a very specialized, magical skill. The clan was known as the Manyuu, and the skill was the ability to administer a sword strike that could shrink the size of a woman's breasts. This might not seem like an ability that could exert power over a land, but in Manyuu Hikenchou, large breasts denote status, wealth, fame, and influence. Grave concern has arisen in the Manyuu clan due to the actions of their chosen successor, Chifusa. Disgusted with the breast obsessed society that the Manyuu have created and perpetuated, Chifusa has not only deserted the clan, but also stolen the sacred scroll that details their techniques to growing and severing breasts. Fortunately, Chifusa is not completely alone. Her fellow warrior Kaede is sympathetic to her cause; a sympathy that could place her in considerable danger. Now wanted by the very clan that raised her, Chifusa must defend her life and Kaede's while seeking to undo the damage their brethren have done to the land. Along the way, Chifusa will discover that she harbors a power that goes far beyond the scope of her training, one that could help shape and change the land that she seeks to bring equality to.";
    background: null;
    season: 'summer';
    year: 2011;
    broadcast: {
      day: 'Mondays';
      time: '01:00';
      timezone: 'Asia/Tokyo';
      string: 'Mondays at 01:00 (JST)';
    };
    producers: [
      {
        mal_id: 16;
        type: 'anime';
        name: 'TV Tokyo';
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo';
      },
      {
        mal_id: 104;
        type: 'anime';
        name: 'Lantis';
        url: 'https://myanimelist.net/anime/producer/104/Lantis';
      },
      {
        mal_id: 392;
        type: 'anime';
        name: 'Enterbrain';
        url: 'https://myanimelist.net/anime/producer/392/Enterbrain';
      },
      {
        mal_id: 647;
        type: 'anime';
        name: 'Memory-Tech';
        url: 'https://myanimelist.net/anime/producer/647/Memory-Tech';
      },
      {
        mal_id: 787;
        type: 'anime';
        name: 'Happinet Pictures';
        url: 'https://myanimelist.net/anime/producer/787/Happinet_Pictures';
      }
    ];
    licensors: [];
    studios: [
      {
        mal_id: 346;
        type: 'anime';
        name: 'Hoods Entertainment';
        url: 'https://myanimelist.net/anime/producer/346/Hoods_Entertainment';
      }
    ];
    genres: [
      {
        mal_id: 1;
        type: 'anime';
        name: 'Action';
        url: 'https://myanimelist.net/anime/genre/1/Action';
      },
      {
        mal_id: 4;
        type: 'anime';
        name: 'Comedy';
        url: 'https://myanimelist.net/anime/genre/4/Comedy';
      },
      {
        mal_id: 9;
        type: 'anime';
        name: 'Ecchi';
        url: 'https://myanimelist.net/anime/genre/9/Ecchi';
      }
    ];
    explicit_genres: [];
    themes: [
      {
        mal_id: 13;
        type: 'anime';
        name: 'Historical';
        url: 'https://myanimelist.net/anime/genre/13/Historical';
      },
      {
        mal_id: 21;
        type: 'anime';
        name: 'Samurai';
        url: 'https://myanimelist.net/anime/genre/21/Samurai';
      }
    ];
    demographics: [
      {
        mal_id: 42;
        type: 'anime';
        name: 'Seinen';
        url: 'https://myanimelist.net/anime/genre/42/Seinen';
      }
    ];
  };
}
