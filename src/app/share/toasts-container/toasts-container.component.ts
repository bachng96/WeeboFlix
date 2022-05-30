import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-toasts-container',
  templateUrl: './toasts-container.component.html',
  styleUrls: ['./toasts-container.component.scss'],
  host: { '[class.ngb-toasts]': 'true' },
})
export class ToastsContainerComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}
  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
