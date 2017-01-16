import React from 'react';
import Mousetrap from 'mousetrap';
import SearchBar from './SearchBar';
import EmojiList from './EmojiList';
import CategoryList from './CategoryList';
import CategorySwitcher from './CategorySwitcher';
import { all, allByCat, categories } from '../data/emoji';
import { matches } from '../utils/emoji';
import '../css/emojiPane.css';

class EmojiPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: props.filter !== '', filter: props.filter, results: all, selectedIndex: 0 };
    this.onSelected = this.onSelected.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.selectNext = this.selectNext.bind(this);
    this.selectPrev = this.selectPrev.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind('right', this.selectNext);
    Mousetrap.bind('left', this.selectPrev);
    Mousetrap.bind('enter', () => this.onSelected());
  }

  componentWillUnmount() {
    Mousetrap.reset();
  }

  onSelected(emoji) {
    const { results, selectedIndex } = this.state;
    this.props.onSelected(emoji || results[selectedIndex]);
  }

  onFilter(filter) {
    const isFilterEmpty = filter === '';
    this.setState({
      filter,
      searching: !isFilterEmpty,
      selectedIndex: 0,
      results: all.filter(el => matches(el, filter)),
    });
  }

  selectNext() {
    this.setState({
      selectedIndex: this.state.selectedIndex + 1,
    });
  }

  selectPrev() {
    const curr = this.state.selectedIndex;
    this.setState({
      selectedIndex: curr === 0 ? 0 : curr - 1,
    });
  }

  render() {
    const { selectedCategory } = this.props;
    const { searching, filter, results, selectedIndex } = this.state;
    return (
      <div className="emoji-pane">
        <SearchBar filter={filter} onFilter={this.onFilter} onSelected={this.onSelected} />
        { searching ?
          (
            <EmojiList
              onSelected={this.onSelected}
              emojis={results}
              selectedIndex={selectedIndex}
            />
          ) :
          (
            <CategoryList onSelected={this.onSelected} allEmojiByCategory={allByCat} />
          )
        }
        <CategorySwitcher categories={categories} selected={selectedCategory} />
      </div>
    );
  }
}

EmojiPane.propTypes = {
  selectedCategory: React.PropTypes.string,
  filter: React.PropTypes.string,
  onSelected: React.PropTypes.func,
};

EmojiPane.defaultProps = {
  filter: '',
  selectedCategory: 'recent',
  onSelected: () => null,
};

export default EmojiPane;
