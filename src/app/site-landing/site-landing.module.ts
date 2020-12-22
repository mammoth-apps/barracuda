import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthModule } from '../core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SiteLandingRoutingModule } from './site-landing-routing.module';
import { SiteLandingComponent } from './site-landing.component';

@NgModule({
  declarations: [SiteLandingComponent, NavigationBarComponent],
  imports: [
    AuthModule,
    CommonModule,
    SiteLandingRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class SiteLandingModule {}
