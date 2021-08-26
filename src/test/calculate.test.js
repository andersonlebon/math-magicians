import calculate from '../mathLogic/calculate';

describe('Check Math calculations', () => {
  it('When Enter AC key', () => {
    const obj = { total: null, next: null, operation: null };
    const restult = calculate(obj, 'AC');
    expect(restult).toStrictEqual(obj);
  });
});
