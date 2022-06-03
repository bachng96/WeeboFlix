import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnimeService } from 'src/app/core/services/anime.service';
import { UserService } from 'src/app/core/services/user.service';
import { LoginFormComponent } from './login-form/login-form.component';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/core/services/toast.service';
import { WatchListService } from 'src/app/core/services/watch-list.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  search = new FormControl('');
  showDropdown: boolean = false;
  searchResults: Object[] = null;
  searchKeyword: string = '';
  listGenre;
  toggleUser: boolean = false;
  toggle: boolean = false;

  show: boolean = false;
  constructor(
    private modalService: NgbModal,
    public userService: UserService,
    private router: Router,
    private animeService: AnimeService,
    private toastService: ToastService,
    public watchListService: WatchListService
  ) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        tap((v: string) => {
          this.searchKeyword = v;
          if (v === '') {
            this.showDropdown = false;
          }
        }),
        filter((v) => v !== ''),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((v) => this.animeService.getAnimeByName(v))
      )
      .subscribe((value: any) => {
        this.showDropdown = true;
        this.searchResults = value.data;
      });
    // end search
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
  seeAllResult() {
    this.router.navigateByUrl('/type/params-' + this.searchKeyword);
    this.showDropdown = false;
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.location.href !== 'http://localhost:4200/home') {
      element.classList.add('navbar-inverse');
    } else {
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
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
    this.showDanger('logout success');
  }
  seeDetail(id) {
    this.showDropdown = false;
    this.router.navigateByUrl('/details/' + id);
  }
  gotoProfile() {
    this.toggleUser = false;
    this.router.navigateByUrl('/user/profile');
  }
  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {
      classname: 'bg-success text-light',
      delay: 3000,
    });
  }

  /** changeTheme */
  //output change themes
  @Output('changeStatus') clickedHandler = new EventEmitter<{
    status: boolean;
  }>();
  changeTheme(e) {
    this.clickedHandler.emit({
      status: e,
    });
  }
}
