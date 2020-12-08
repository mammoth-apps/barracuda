import * as fromPayee from './payee.actions';

describe('loadPayees', () => {
  it('should return an action', () => {
    expect(fromPayee.loadPayees().type).toBe('[Payee] Load Payees');
  });
});
