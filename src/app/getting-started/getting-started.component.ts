import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent {
  constructor(private authService: AuthService) {}

  public loginClicked(): void {
    this.authService.loginWithRedirect({
      redirect_uri: window.location.origin + '/app',
    });
  }
}
