import { Component } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent {
  constructor(private authService: AuthService) {}

  public loginClicked(): void {
    this.authService.login();
  }
}
