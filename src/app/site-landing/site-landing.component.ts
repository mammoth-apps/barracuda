import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-site-landing',
  templateUrl: './site-landing.component.html',
  styleUrls: ['./site-landing.component.scss'],
})
export class SiteLandingComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];
  constructor(private router: Router, private authService: AuthService) {
    // * Going to place a little temporary work around to redirect if logged in.
    this.subscriptions.push(
      this.authService.isAuthenticated$
        .pipe(
          tap((isAuthenticated) => {
            if (isAuthenticated) {
              this.router.navigateByUrl('/app');
            }
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
