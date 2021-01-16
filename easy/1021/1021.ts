const removeOuterParentheses = (S: string): string => {
  let result: string = '';
  let start: number = 0,
    count: number = 0;
  for (let i = 0, length = S.length; i < length; i++) {
    const char = S[i];
    if (char === '(') {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      result += S.slice(start + 1, i);
      start = i + 1;
    }
  }
  return result;
};

export default removeOuterParentheses;
