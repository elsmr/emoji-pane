import React from 'react';
import { NATIVE } from '../data/constants';
import '../css/emoji.css';

const Emoji = ({ type, emoji, onSelected, selected }) => {
  if (type === NATIVE) {
    return (
      <span title={emoji.desc} className={selected ? 'emoji emoji--selected' : 'emoji'} onClick={() => { onSelected(emoji); }}>
        {emoji.char}
      </span>
    );
  }
  return <img src={`../data/emoji/svg/${emoji.i}.svg`} alt="" />;
};

Emoji.propTypes = {
  type: React.PropTypes.number,
  emoji: React.PropTypes.object,
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
