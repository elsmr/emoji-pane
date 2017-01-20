import React from 'react';
import { NATIVE } from '../data/constants';
import '../css/emoji.css';

const Emoji = ({ type, emoji, onSelected, selected, skinTone }) => {
  const tonedEmoji = skinTone !== 0 && emoji.tones ? Object.assign(emoji, { char: emoji.tones[skinTone].char }) : emoji;
  if (type === NATIVE) {
    return (
      <span title={emoji.desc} className={selected ? 'emoji emoji--selected' : 'emoji'} onClick={() => { onSelected(tonedEmoji); }}>
        {tonedEmoji.char}
      </span>
    );
  }
  return <img src={`../data/emoji/svg/${emoji.i}.svg`} alt="" />;
};

Emoji.propTypes = {
  type: React.PropTypes.number,
  emoji: React.PropTypes.object,
  skinTone: React.PropTypes.number.isRequired,
  onSelected: React.PropTypes.func,
  selected: React.PropTypes.bool,
};

Emoji.defaultProps = {
  type: NATIVE,
  emoji: {},
  onSelected: () => null,
  selected: false,
};

export default Emoji;
