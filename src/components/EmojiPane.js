import React from 'react';
import Mousetrap from 'mousetrap';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import CategoryList from './CategoryList';
import CategorySwitcher from './CategorySwitcher';
import { all, allByCat, categories } from '../data/emoji';
import { matches, queue } from '../utils/emoji';
import '../css/emojiPane.css';

class EmojiPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: props.filter !== '',
      filter: props.filter,
      results: all,
      selectedIndex: 0,
      skinTone: props.skinTone,
      recents: props.recents.slice(0, props.recentsSize),
    };
    this.onSelected = this.onSelected.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.selectNext = this.selectNext.bind(this);
    this.selectPrev = this.selectPrev.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind('right', this.selectNext);
    Mousetrap.bind('left', this.selectPrev);
    Mousetrap.bind('enter', this.onSelected);
  }

  componentWillUnmount() {
    Mousetrap.reset();
  }

  onSelected(emoji) {
    const { results, selectedIndex, recents } = this.state;
    this.setState({ recents: queue(recents, this.props.recentsSize, emoji) });
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
    const { searching, filter, results, selectedIndex, skinTone, recents } = this.state;
    return (
      <div className="emoji-pane">
        <SearchBar filter={filter} onFilter={this.onFilter} onSelected={this.onSelected} />
        { searching ?
          (
            <SearchResults
              selectedIndex={selectedIndex}
              results={results}
              onSelected={this.onSelected}
              skinTone={skinTone}
            />
          ) :
          (
            <CategoryList
              recents={recents}
              onSelected={this.onSelected}
              allEmojiByCategory={allByCat}
              skinTone={skinTone}
            />
          )
        }
        { !searching &&
          <CategorySwitcher categories={categories} recentsEnabled={recents.length !== 0} />
        }
      </div>
    );
  }
}

EmojiPane.propTypes = {
  filter: React.PropTypes.string,
  onSelected: React.PropTypes.func,
  skinTone: React.PropTypes.number,
  recents: React.PropTypes.array,
  recentsSize: React.PropTypes.number,
};

EmojiPane.defaultProps = {
  filter: '',
  onSelected: () => null,
  skinTone: 0,
  recents: [],
  recentsSize: 12,
};

export default EmojiPane;
