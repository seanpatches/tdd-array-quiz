const { correctFunction } = require ('../lib/index.js');

describe('quiz', () => {
  it('prints back words that are not nope', () => {
    const array2 = ['sky', 'green', 'Yeti', 'hot'];
    expect(correctFunction(array2)).toEqual(['Is it green?', 'Is it hot?']);
  });
});
