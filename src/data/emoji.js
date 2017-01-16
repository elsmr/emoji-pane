import allByCat from './emojiCatsNew.json';

export { default as all } from './emojiNestedTones.json';
export { allByCat };
export const categories = allByCat
  .map(el => ({
    name: el.name,
    icon: el.icon,
  }));
