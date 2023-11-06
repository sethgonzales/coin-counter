import { coinCounter } from './../src/js/coin.js';

describe(coinCounter, () => {
  test("test if returns correct change", () => {
    const expectedResult = {
      25: 3,
      10: 0,
      5: 0,
      1: 2,
    };    
    const result = coinCounter(0.77);    
    expect(expectedResult).toEqual(result);
  });
});
