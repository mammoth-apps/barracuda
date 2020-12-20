import { RouterReducerState } from '@ngrx/router-store';
import { IAccountState, initialAccountState } from './account.state';
import { IBudgetState, initialBudgetState } from './budget.state';

export interface IMammothState {
  router?: RouterReducerState;
  budget: IBudgetState;
  account: IAccountState;
}

export const initialMammothState: IMammothState = {
  budget: initialBudgetState,
  account: initialAccountState,
};

export function getInitialMammothState(): IMammothState {
  return initialMammothState;
}
