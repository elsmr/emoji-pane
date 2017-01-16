import React from 'react';
import renderer from 'react-test-renderer';
import EmojiPane from '../components/EmojiPane';

describe('EmojiPane', () => {
  it('renders', () => {
    const component = renderer.create(<EmojiPane />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
