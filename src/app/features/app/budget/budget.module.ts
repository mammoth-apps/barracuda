import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AgentsModule } from 'src/app/agents/agents.module';
import { BudgetComponent } from './budget.component';
import { BudgetEffects } from './effects/budget.effects';
import * as fromBudget from './reducers/budget.reducer';

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    AgentsModule,
    CommonModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromBudget.budgetFeatureKey, fromBudget.reducer),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([BudgetEffects]),
  ],
})
export class BudgetModule {}
