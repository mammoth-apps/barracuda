import { IAccount } from '@mammoth-apps/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const loadAccounts = createAction('[Account] Load Account');
export const loadAccountsSuccess = createAction(
  '[Account] Load Account Success',
  props<{ accounts: IAccount[] }>()
);
export const loadAccountsFailure = createAction(
  '[Account] Load Account Failure',
  props<{ errorMsg: string }>()
);

export const getAccount = createAction(
  '[Account] Get Account',
  props<{ id: string }>()
);
export const getAccountSuccess = createAction(
  '[Account] Get Account Success',
  props<{ accounts: IAccount }>()
);
export const getAccountFailure = createAction(
  '[Account] Get Account Failure',
  props<{ errorMsg: string }>()
);
