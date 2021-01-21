import findSubstringInWraproundString from './467';

describe('1304: Find N Unique Integers Sum up to Zero', () => {
  test('Example 1 Test Case', () => {
    expect(findSubstringInWraproundString('a')).toEqual(1);
  });
  test('Example 2 Test Case', () => {
    expect(findSubstringInWraproundString('cac')).toEqual(2);
  });
  test('Example 3 Test Case', () => {
    expect(findSubstringInWraproundString('zab')).toEqual(6);
  });
});
