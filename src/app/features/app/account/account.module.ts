import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountAgent } from './api/account.agent';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, AccountRoutingModule],
  providers: [AccountAgent],
})
export class AccountModule {}
