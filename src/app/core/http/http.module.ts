import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthModule } from '../auth';
import { HttpInterceptorService } from '../auth/http-interceptor.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class HttpModule {}
