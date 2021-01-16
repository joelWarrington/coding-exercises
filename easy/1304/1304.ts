const sumZero = (n: number): number[] => {
  const result: number[] = [];
  let sum: number = 0;
  for (let i = 1; i < n; i++) {
    result.unshift(-i);
    sum += i;
  }
  result.push(sum);
  return result;
};

export default sumZero;
