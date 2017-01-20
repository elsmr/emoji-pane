import React from 'react';
import EmojiList from './EmojiList';
import '../css/SearchResults.css';

const SearchResults = ({ selectedIndex, results, skinTone, onSelected }) => (
  <div className="emoji-pane__results">
    <EmojiList
      onSelected={onSelected}
      emojis={results}
      selectedIndex={selectedIndex}
      skinTone={skinTone}
    />
  </div>
);

SearchResults.propTypes = {
  selectedIndex: React.PropTypes.number.isRequired,
  results: React.PropTypes.array.isRequired,
  skinTone: React.PropTypes.number.isRequired,
  onSelected: React.PropTypes.func.isRequired,
};


export default SearchResults;
