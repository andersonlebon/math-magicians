import operate from '../mathLogic/operate';
// import Big from 'big.js';

describe('Math oparations', () => {
  it('Should test the addition oparation', () => {
    const result = operate(1, 2, '+');
    expect(parseInt(result, 10)).toEqual(3);
  });

  it('Should test the Substract oparation', () => {
    const result = operate(10, 2, '-');
    expect(parseInt(result, 10)).toEqual(8);
  });

  it('Should test the Multiply oparation', () => {
    const result = operate(3, 2, 'x');
    expect(parseInt(result, 10)).toEqual(6);
  });

  it('Should test the Divide oparation', () => {
    const result = operate(10, 2, '÷');
    expect(parseInt(result, 10)).toEqual(5);
  });
});
