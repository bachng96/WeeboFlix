import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.scss'],
})
export class CaroselComponent implements OnInit {
  ngOnInit(): void {}
  images = [
    {
      url: 'https://static.bunnycdn.ru/i/cache/images/1/11/11e74e0db7ee6479e99cde9c583bf44d.jpg',
    },
    {
      url: 'https://static.bunnycdn.ru/i/cache/images/f/fb/fbe82e085549d52d06b0d93b1fb4ed33.jpg',
    },
    {
      url: 'https://static.bunnycdn.ru/i/cache/images/7/79/799816e7bc27bac1ea550c51e70d84f9.jpg',
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnFocus = true;
    config.pauseOnHover = false;
  }
}
