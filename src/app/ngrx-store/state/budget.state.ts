import { IBudget } from '@mammoth-apps/api-interfaces';

export interface IBudgetState {
  budgets: IBudget[];
  selectedBudget: IBudget;
  error: any;
}

export const initialBudgetState: IBudgetState = {
  budgets: [],
  selectedBudget: {} as IBudget,
  error: null,
};
