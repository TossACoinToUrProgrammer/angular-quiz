import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email,
      Validators.minLength(2),
    ]),
    password: new FormControl<string>('', [Validators.required]),
  });

  get email() {
    return this.form.controls.email as FormControl;
  }

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  test() {
    console.log('form', this.form);
  }

  submit() {
    const { email, password } = this.form.value;
    if (this.form.valid && email && password) {
      this.authService.SignIn(email, password);
    }
  }
}
