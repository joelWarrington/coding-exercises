const minTimeToVisitAllPoints = (points: number[][]): number =>
  points.reduce(
    (acc, curr, index, arr) =>
      index === points.length - 1
        ? acc
        : acc +
          Math.max(
            Math.abs(curr[0] - arr[index + 1][0]),
            Math.abs(curr[1] - arr[index + 1][1])
          ),
    0
  );

export default minTimeToVisitAllPoints;
