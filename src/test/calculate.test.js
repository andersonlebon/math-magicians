import calculate from '../mathLogic/calculate';

let input = {};
describe('Calculator test', () => {
  it('testing the sum operation', () => {
    input = {
      total: 3, // this is the input format
      next: 1, // current save value
      operation: '+', // the operation
    };
    const { total } = calculate(input, '=');
    expect(total).toBe('4');
  });

  it('testing the substration operation', () => {
    input = {
      total: 4,
      next: 1,
      operation: '-',
    };
    const { total } = calculate(input, '=');
    expect(total).toBe('3');
  });

  it('test the result of +/-', () => {
    input = {
      total: 5,
      next: 9,
      operation: '-',
    };

    const { next } = calculate(input, '+/-');
    expect(next).toBe('-9');
  });
  it('testing the Modulation operation', () => {
    input = {
      total: 11,
      next: 5,
      operation: '%',
    };
    const { total } = calculate(input, '=');
    expect(total).toBe('1');
  });

  it('testing the multiplication operation', () => {
    input = {
      total: 4,
      next: 2,
      operation: 'x',
    };
    const { total } = calculate(input, '=');
    expect(total).toBe('8');
  });

  it('testing the AC Button', () => {
    input = {
      total: 52356346235233,
      next: 55744574723465,
      operation: '+',
    };
    const result = calculate(input, 'AC');
    expect(result).toMatchSnapshot({
      total: null,
      next: null,
      operation: null,
    });
  });
});
