import removeOuterParentheses from './1021';

describe('1266: Minimum Time Visiting All Points', () => {
  test('Example 1 Test Case', () => {
    const S = '(()())(())';
    expect(removeOuterParentheses(S)).toEqual('()()()');
  });
  test('Example 2 Test Case', () => {
    const S = '(()())(())(()(()))';
    expect(removeOuterParentheses(S)).toEqual('()()()()(())');
  });
  test('Example 2 Test Case', () => {
    const S = '()()';
    expect(removeOuterParentheses(S)).toEqual('');
  });
});
