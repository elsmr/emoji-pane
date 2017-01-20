export const matches = (emoji, filter) => {
  const lFilter = filter.toLowerCase();
  return emoji.name.indexOf(lFilter) !== -1 ||
  emoji.desc.indexOf(lFilter) !== -1 ||
  emoji.keywords.some(el => el.indexOf(lFilter) !== -1);
};

export const queue = (arr, maxLen, emoji) => {
  arr.some((el, i) => {
    const contains = el.char === emoji.char;
    if (contains) {
      arr.splice(i, 1);
    }
    return contains;
  });

  if (arr.length >= maxLen) {
    arr.shift();
  }

  arr.push(emoji);
  return arr;
};
