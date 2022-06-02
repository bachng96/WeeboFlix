import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { ToastService } from './core/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = 'yellow-theme';
  title = 'weeboflix';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  show = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private render: Renderer2
  ) {}
  ngOnInit() {
    this.initialTheme();
  }
  initialTheme = (): void => {
    this.render.addClass(this.document.body, this.theme);
  };
  changeStatus(e) {
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
