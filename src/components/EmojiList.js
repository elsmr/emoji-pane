import React from 'react';
import Emoji from './Emoji';

const EmojiList = ({ emojis, onSelected, selectedIndex, skinTone }) => (
  <div className="emoji-panel__list">
    {emojis.length > 0 ?
      (
        emojis
          .map((emoji, i) => (
            <Emoji
              selected={i === selectedIndex}
              key={emoji.name}
              onSelected={onSelected}
              emoji={emoji}
              skinTone={skinTone}
            />))
      ) : (
        <p className="emoji-panel__list__message">No emoji found <span>😢</span></p>
      )
    }
  </div>
);

EmojiList.propTypes = {
  emojis: React.PropTypes.array.isRequired,
  onSelected: React.PropTypes.func.isRequired,
  selectedIndex: React.PropTypes.number,
  skinTone: React.PropTypes.number.isRequired,
};

EmojiList.defaultProps = {
  selectedIndex: -1,
};

export default EmojiList;
