import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [CommonModule, GettingStartedRoutingModule, MatButtonModule],
})
export class GettingStartedModule {}
