import findNumbers from './1295';

describe('1295: Find Numbers with Even Number of Digits', () => {
  test('One Number, No Even Numbers', () => {
    let nums: number[] = [1];
    expect(findNumbers(nums)).toEqual(0);

    nums = [2];
    expect(findNumbers(nums)).toEqual(0);
  });
  test('One Number, Even Number', () => {
    let nums: number[] = [11];
    expect(findNumbers(nums)).toEqual(1);

    nums = [22];
    expect(findNumbers(nums)).toEqual(1);
  });
  test('Two Numbers, One Even Number', () => {
    let nums: number[] = [11, 2];
    expect(findNumbers(nums)).toEqual(1);

    nums = [1, 22];
    expect(findNumbers(nums)).toEqual(1);
  });
  test('Two Numbers, Two Even Numbers', () => {
    let nums: number[] = [11, 22];
    expect(findNumbers(nums)).toEqual(2);

    nums = [22, 11];
    expect(findNumbers(nums)).toEqual(2);
  });
  test('Example 1 Test Case', () => {
    const nums: number[] = [12, 345, 2, 6, 7896];
    expect(findNumbers(nums)).toEqual(2);
  });
  test('Example 2 Test Case', () => {
    const nums: number[] = [555, 901, 482, 1771];
    expect(findNumbers(nums)).toEqual(1);
  });
});
