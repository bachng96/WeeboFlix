import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  havaAccount: boolean = true;
  signForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  constructor(
    private userService: UserService,
    private ToastService: ToastrService,
    public activeModal: NgbActiveModal
  ) {}
  ngOnInit(): void {}

  //get
  get get_password() {
    return this.signForm.get('password');
  }
  get get_email() {
    return this.signForm.get('email');
  }
  user = {
    email: 'janet.weaver@reqres.in',
    password: '23424',
  };
  onLogin() {
    this.userService.login(this.user).subscribe((res) => {
      if (res) {
        this.activeModal.close('Close click');
        this.ToastService.success('Login success ! ', 'Notification');
      }
    });
  }
}
