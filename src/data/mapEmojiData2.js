const fs = require('fs');
const json = require('./emojiByCategory');

const newCats = Object.keys(json)
  .map((cat) => {
    switch (cat) {
      case 'people':
        return { name: cat, icon: '😀', desc: 'Smileys and people', emoji: json[cat] };
      case 'nature':
        return { name: cat, icon: '🐻', desc: 'Animals and nature', emoji: json[cat] };
      case 'food':
        return { name: cat, icon: '🍔', desc: 'Food and drink', emoji: json[cat] };
      case 'activity':
        return { name: cat, icon: '⚽', desc: 'Activities', emoji: json[cat] };
      case 'travel':
        return { name: cat, icon: '🚘', desc: 'Travel and places', emoji: json[cat] };
      case 'objects':
        return { name: cat, icon: '💡', desc: 'Objects', emoji: json[cat] };
      case 'flags':
        return { name: cat, icon: '🇦🇶', desc: 'Flags', emoji: json[cat] };
      case 'symbols':
        return { name: cat, icon: '❤', desc: 'Symbols', emoji: json[cat] };
      default:
        break;
    return undefined;
    }
  });

fs.writeFileSync('emojiCatsNew.json', JSON.stringify(newCats, null, 2));
// fs.writeFileSync('emojiNestedTones.json', JSON.stringify(all, null, 2));

