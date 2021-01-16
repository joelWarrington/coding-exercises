import sumZero from './1304';

describe('1304: Find N Unique Integers Sum up to Zero', () => {
  const evaluateResult = (n: number) => {
    const result: number[] = sumZero(n);
    const set: Set<Number> = new Set(result);
    expect(set.size).toEqual(result.length);
    expect(result.reduce((acc, curr) => acc + curr)).toEqual(0);
  };

  test('Example 1 Test Case', () => {
    evaluateResult(5);
  });
  test('Example 2 Test Case', () => {
    evaluateResult(3);
  });
  test('Example 3 Test Case', () => {
    evaluateResult(1);
  });
});
