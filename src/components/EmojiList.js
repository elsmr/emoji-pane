import React from 'react';
import Emoji from './Emoji';
import '../css/emojiList.css';

const EmojiList = ({ emojis, onSelected, selectedIndex }) => (
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
};

EmojiList.defaultProps = {
  selectedIndex: -1,
};

export default EmojiList;
