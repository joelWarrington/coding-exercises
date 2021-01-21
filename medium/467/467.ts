const findSubstringInWraproundString = (p: string): number => {
  if (p.length === 0) return 0;

  // Lowercase char codes start at 97 (a-z)
  const getLowercaseCharCode = (char: string) => char.charCodeAt(0) - 97;
  const arr: number[] = Array(26).fill(0);
  let currentMaximumUnique;
  arr[getLowercaseCharCode(p[0])] = currentMaximumUnique = 1;

  for (let i = 1; i < p.length; i++) {
    const previousCharId = getLowercaseCharCode(p[i - 1]);
    const charId = getLowercaseCharCode(p[i]);

    // next char is either next character in alphabet or is a->z
    charId - previousCharId === 1 || charId - previousCharId === -25
      ? currentMaximumUnique++
      : (currentMaximumUnique = 1);

    arr[charId] = Math.max(arr[charId], currentMaximumUnique);
  }
  return arr.reduce((acc, val) => acc + val);
};

export default findSubstringInWraproundString;
