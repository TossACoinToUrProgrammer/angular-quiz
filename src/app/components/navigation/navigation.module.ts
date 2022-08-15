import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NavigationComponent } from './navigation.component';
import { AuthenticationService } from '../../services/authentication.service';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, BrowserModule],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  bootstrap: [NavigationComponent],
  providers: [AuthenticationService],
})
export class NavigationModule {}
