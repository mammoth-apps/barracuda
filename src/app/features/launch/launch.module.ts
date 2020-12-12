import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LandingRoutingModule } from './launch-routing.module';
import { LaunchPageComponent } from './launch.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    LandingRoutingModule,
  ],
  declarations: [LaunchPageComponent, ToolbarComponent],
})
export class LaunchModule {}
