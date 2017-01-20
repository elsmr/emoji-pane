import React from 'react';
import EmojiList from './EmojiList';
import '../css/emojiCategory.css';

const EmojiCategory = ({ name, description, emojiByCategory, skinTone, onSelected }) => (
  <div className="category">
    <h3 id={name} className="category__title">
      {description}
    </h3>
    <EmojiList
      onSelected={onSelected}
      emojis={emojiByCategory}
      skinTone={skinTone}
    />
  </div>
);

EmojiCategory.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  emojiByCategory: React.PropTypes.array.isRequired,
  onSelected: React.PropTypes.func.isRequired,
  skinTone: React.PropTypes.number.isRequired,
};

export default EmojiCategory;
