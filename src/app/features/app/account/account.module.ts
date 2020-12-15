import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../../material/material.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountAgent } from './api/account.agent';
import { AccountEffects } from './effects/account.effects';
import * as fromAccounts from './reducers/account.reducer';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    StoreModule.forFeature(
      fromAccounts.accountFeatureKey,
      fromAccounts.reducer
    ),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([AccountEffects]),
  ],
  providers: [AccountAgent],
})
export class AccountModule {}
