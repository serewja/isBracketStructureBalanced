const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];
const isBracketStructureBalanced = (string) => {
  const stack = [];
  for (const i of string) {
    if (openingSymbols.includes(i)) {
      stack.push(i);
    }
    if (closingSymbols.includes(i)) {
      const lastSymbol = stack.pop();
      const openIndex = openingSymbols.indexOf(lastSymbol);
      const closeIndex = closingSymbols.indexOf(i);
      if (openIndex !== closeIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
export default isBracketStructureBalanced;