import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(private authService: AuthService) {}

  public onLoginClick(): void {
    this.authService.loginWithRedirect({
      redirect_uri: 'http://localhost:4200/app',
    });
  }
}
