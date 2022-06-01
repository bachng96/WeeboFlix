import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  //output change themes
  @Output('changeStatus') clickedHandler = new EventEmitter<{
    status: boolean;
  }>();
  constructor() {}

  ngOnInit(): void {}
  changeTheme(e) {
    this.clickedHandler.emit({
      status: e.target.value,
    });
  }
}
