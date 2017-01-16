import React from 'react';
import EmojiCategory from './EmojiCategory';
import '../css/categoryList.css';

const CategoryList = ({ allEmojiByCategory, onSelected }) => (
  <div className="category-list">
    {
      allEmojiByCategory
        .map(cat =>
          <EmojiCategory
            key={cat.name}
            title={cat.name}
            emojiByCategory={cat.emoji}
            onSelected={onSelected}
          />)
    }
  </div>
);

CategoryList.propTypes = {
  allEmojiByCategory: React.PropTypes.array.isRequired,
  onSelected: React.PropTypes.func.isRequired,
};

export default CategoryList;
