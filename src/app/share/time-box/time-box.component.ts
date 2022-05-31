import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-box',
  templateUrl: './time-box.component.html',
  styleUrls: ['./time-box.component.scss'],
})
export class TimeBoxComponent implements OnInit {
  amountTime: number[] = [];
  constructor() {}
  @Output('onClick') onClick = new EventEmitter<{ data: string }>();

  ngOnInit(): void {
    let time = new Date();
    console.log(time.getFullYear);

    for (let i = 2003; i < 2022; i++) {
      this.amountTime.push(i);
    }
  }
  choseItem(data) {
    this.onClick.emit({
      data: data,
    });
  }
}
