import findSubstringInwraparoundString from './467';

describe('1304: Find N Unique Integers Sum up to Zero', () => {
  test('Example 1 Test Case', () => {
    expect(findSubstringInwraparoundString('a')).toEqual(1);
  });
  test('Example 2 Test Case', () => {
    expect(findSubstringInwraparoundString('cac')).toEqual(2);
  });
  test('Example 3 Test Case', () => {
    expect(findSubstringInwraparoundString('zab')).toEqual(6);
  });
});
