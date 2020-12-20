import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IMammothState } from '../state/mammoth.state';
import { accountReducer } from './account.reducer';
import { budgetReducer } from './budget.reducers';

export const mammothReducers: ActionReducerMap<IMammothState, any> = {
  router: routerReducer,
  account: accountReducer,
  budget: budgetReducer,
};
