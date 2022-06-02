import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(public userService: UserService) {}
  styles = {
    backgroundImage: `url(${this.userService.user.avatar})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '20vh',
    filter: 'blur(8px)',
  };
  ngOnInit(): void {
    console.log(this.userService.user.avatar);
  }
}
