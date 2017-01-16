export const matches = (emoji, filter) => {
  const lFilter = filter.toLowerCase();
  return emoji.name.indexOf(lFilter) !== -1 ||
  emoji.desc.indexOf(lFilter) !== -1 ||
  emoji.keywords.some(el => el.indexOf(lFilter) !== -1);
};
