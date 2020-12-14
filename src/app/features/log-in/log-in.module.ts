import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from 'src/app/core';
import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';

@NgModule({
  declarations: [LogInComponent],
  imports: [AuthModule, CommonModule, LogInRoutingModule, MatButtonModule],
})
export class LogInModule {}
