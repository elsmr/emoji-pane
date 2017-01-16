const fs = require('fs');
const json = require('./emojiData');

const all = Object.keys(json)
  .map((key) => {
    const sel = json[key];
    const chars = sel.unicode.split('-');
    const char = chars.reduce((a, el) => a + String.fromCodePoint(parseInt(el, 16)), '');
    return {
      name: key,
      char,
      code: sel.unicode_alt || sel.unicode,
      desc: sel.name,
      i: sel.emoji_order,
      keywords: sel.keywords,
      cat: sel.category,
    };
  })
  .reduce((a, el) => {
    if (/tone[0-9]$/.test(el.name)) {
      if (!a[a.length - 1].tones) {
        a[a.length - 1].tones = [];
      }
      a[a.length - 1].tones
        .push({
          name: el.name.slice(-5),
          char: el.char,
          code: el.code,
          i: el.i,
        });
    } else {
      a.push(el);
    }
    return a;
  }, []);

const allByCat = all
  .reduce((a, el) => {
    const cat = el.cat;
    delete el.cat;
    if (!Object.keys(a).includes(cat)) {
      a[cat] = [];
    }
    a[cat].push(el);
    return a;
  }, {});

fs.writeFileSync('emojiByCategory.json', JSON.stringify(allByCat, null, 2));
fs.writeFileSync('emojiNestedTones.json', JSON.stringify(all, null, 2));
