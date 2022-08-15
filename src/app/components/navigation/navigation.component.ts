import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isAuth = false;
  constructor(private authService: AuthenticationService) {
    authService.userData.subscribe((user) => {
      if (user?.email) {
        this.isAuth = true;
      }
    });
  }

  logout() {
    this.authService.SignOut();
  }
}
