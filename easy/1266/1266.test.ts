import minTimeToVisitAllPoints from './1266';

describe('1266: Minimum Time Visiting All Points', () => {
  test('Example 1 Test Case', () => {
    const points: number[][] = [
      [1, 1],
      [3, 4],
      [-1, 0],
    ];
    expect(minTimeToVisitAllPoints(points)).toEqual(7);
  });
  test('Example 2 Test Case', () => {
    const points: number[][] = [
      [3, 2],
      [-2, 2],
    ];
    expect(minTimeToVisitAllPoints(points)).toEqual(5);
  });
});
