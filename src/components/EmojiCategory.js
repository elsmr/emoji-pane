import React from 'react';
import EmojiList from './EmojiList';
import '../css/emojiCategory.css';

const EmojiCategory = ({ title, emojiByCategory, onSelected }) => (
  <div className="category">
    <h3 id={title} className="category__title">
      {title}
    </h3>
    <EmojiList
      onSelected={onSelected}
      emojis={emojiByCategory}
    />
  </div>
);

EmojiCategory.propTypes = {
  title: React.PropTypes.string.isRequired,
  emojiByCategory: React.PropTypes.array.isRequired,
  onSelected: React.PropTypes.func.isRequired,
};

export default EmojiCategory;
