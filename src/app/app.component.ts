import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { ToastService } from './core/services/toast.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme: string = '';
  title = 'weeboflix';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  show = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private render: Renderer2,
    private userService: UserService
  ) {}
  ngOnInit() {
    let color = this.userService.theme;
    if (color) {
      if (color === 'green') {
        this.theme = 'green-theme';
      }
      if (color === 'sky') {
        this.theme = 'sky-theme';
      }
      if (color === 'yellow') {
        this.theme = 'yellow-theme';
      }
    } else {
      this.theme = 'yellow-theme';
    }

    console.log(this.theme);
    this.initialTheme();
  }
  initialTheme = (): void => {
    this.render.addClass(this.document.body, this.theme);
  };
  changeStatus(e) {
    localStorage.setItem('theme', e.status);
    this.document.body.classList.replace(
      this.theme,
      e.status === 'green'
        ? (this.theme = 'green-theme')
        : e.status === 'yellow'
        ? (this.theme = 'yellow-theme')
        : (this.theme = 'sky-theme')
    );
  }
}
