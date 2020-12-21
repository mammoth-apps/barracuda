import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthModule } from '../auth';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, HttpClientModule],
})
export class HttpModule {}
