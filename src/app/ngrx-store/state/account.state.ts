import { IAccount } from '@mammoth-apps/api-interfaces';

export interface IAccountState {
  accounts: IAccount[];
  selectedAccount: IAccount;
}

export const initialAccountState: IAccountState = {
  accounts: [],
  selectedAccount: {} as IAccount,
};
