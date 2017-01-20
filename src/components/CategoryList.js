import React from 'react';
import EmojiCategory from './EmojiCategory';
import '../css/categoryList.css';

const CategoryList = ({ allEmojiByCategory, skinTone, recents, onSelected }) => (
  <div className="category-list">
    { recents.length !== 0 &&
      <EmojiCategory
        name="recents"
        description="Recents"
        emojiByCategory={recents}
        skinTone={skinTone}
        onSelected={onSelected}
      />
    }
    {
      allEmojiByCategory
        .map(cat =>
          <EmojiCategory
            key={cat.name}
            name={cat.name}
            description={cat.desc}
            emojiByCategory={cat.emoji}
            skinTone={skinTone}
            onSelected={onSelected}
          />)
    }
  </div>
);

CategoryList.propTypes = {
  allEmojiByCategory: React.PropTypes.array.isRequired,
  onSelected: React.PropTypes.func.isRequired,
  skinTone: React.PropTypes.number.isRequired,
  recents: React.PropTypes.array.isRequired,
};

export default CategoryList;
