import { createReducer, on } from '@ngrx/store';
import { AccountActions } from '../actions';
import { initialAccountState } from '../state/account.state';

export const accountReducer = createReducer(
  initialAccountState,
  on(AccountActions.loadAccountsSuccess, (state, { accounts }) => ({
    ...state,
    accounts,
  }))
);
