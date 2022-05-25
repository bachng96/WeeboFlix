import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  listGenre;
  toggle: boolean = false;
  ngOnInit(): void {}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
