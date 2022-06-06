import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/core/services/toast.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  havaAccount: boolean = true;
  loading: boolean = false;
  errorMessage: string = '';
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
    public toastService: ToastService,
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
    this.loading = true;
    this.errorMessage = '';
    this.userService.login(this.signForm.value).subscribe(
      (res) => {
        if (res) {
          this.loading = false;
          this.errorMessage = '';
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.activeModal.close('Close click');
            this.showDanger('Login success !');
          }, 2000);
        }
      },
      (err) => {
        this.loading = false;
        this.errorMessage = err.error.error;
      }
    );
  }
  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {
      classname: 'bg-success text-light',
      delay: 3000,
    });
  }
  demoLogin() {
    this.signForm.setValue({
      email: 'janet.weaver@reqres.in',
      password: '23424',
    });
  }
}
