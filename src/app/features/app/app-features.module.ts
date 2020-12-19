import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppFeaturesRoutingModule } from './app-features-routing.module';
import { AppFeaturesComponent } from './app-features.component';

@NgModule({
  declarations: [AppFeaturesComponent],
  imports: [CommonModule, AppFeaturesRoutingModule],
})
export class AppFeaturesModule {}
