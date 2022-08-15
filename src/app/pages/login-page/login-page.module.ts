import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { AuthenticationService } from '../../services/authentication.service';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [LoginPageComponent],
  bootstrap: [LoginPageComponent],
  providers: [AuthenticationService],
})
export class LoginPageModule {}
