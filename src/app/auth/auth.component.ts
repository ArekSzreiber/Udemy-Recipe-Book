import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  inLoginMode = true;

  constructor(private authService: AuthService) {
  }

  onSwitchMode() {
    this.inLoginMode = !this.inLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.inLoginMode) {
      // ...
    } else {
      this.authService.signUp(email, password)
        .subscribe(
          responseData => {
            console.log(responseData);
          },
          error => {
            console.log(error);
          }
        );
    }
    form.reset();
  }
}
