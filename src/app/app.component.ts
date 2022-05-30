import { Component } from '@angular/core';
import { ToastService } from './core/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weeboflix';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  show = true;
  constructor(public toastService: ToastService) {}
  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {
      classname: 'bg-danger text-light',
      delay: 15000,
    });
  }
}
