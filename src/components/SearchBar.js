import React from 'react';
import '../css/searchBar.css';

const SearchBar = ({ filter, onFilter, onSelected }) => (
  <div className="search-bar">
    <input
      type="search"
      className="search-bar__input"
      value={filter}
      onChange={({ target: { value } }) => { onFilter(value); }}
      onKeyPress={
        (e) => {
          if (e.charCode === 13 && filter !== '') {
            onSelected();
            e.target.blur();
          }
        }
      }
      onKeyDown={
        (e) => {
          if (e.keyCode === 39 || e.keyCode === 40) {
            e.target.blur();
          }
        }
      }
      placeholder="Search emoji..."
      autoFocus
    />
  </div>
);

SearchBar.propTypes = {
  filter: React.PropTypes.string.isRequired,
  onFilter: React.PropTypes.func.isRequired,
  onSelected: React.PropTypes.func.isRequired,
};

export default SearchBar;
