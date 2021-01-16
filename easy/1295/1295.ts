const findNumbers = (nums: number[]): number =>
  nums.filter((value) => value.toString().length % 2 === 0).length;

export default findNumbers;
