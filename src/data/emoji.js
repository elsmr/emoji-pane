import allByCat from './emojiCatsNew.json';

export { default as all } from './emojiNestedTones.json';
export { allByCat };
export const categories = allByCat
  .map(el => ({
    name: el.name,
    desc: el.desc,
    icon: el.icon,
  }));
