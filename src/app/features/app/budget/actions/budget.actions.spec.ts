import * as fromBudget from './budget.actions';

describe('loadBudgets', () => {
  it('should return an action', () => {
    expect(fromBudget.loadBudgets().type).toBe('[Budget] Load Budgets');
  });
});
