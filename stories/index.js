import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import EmojiPane from '../src/components/EmojiPane';

const recents = [{
      "name": "yum",
      "char": "😋",
      "code": "1f60b",
      "desc": "face savouring delicious food",
      "i": "11",
      "keywords": [
        "happy",
        "silly",
        "smiley",
        "emotion",
        "sarcastic",
        "good"
      ]
    },
    {
      "name": "sunglasses",
      "char": "😎",
      "code": "1f60e",
      "desc": "smiling face with sunglasses",
      "i": "12",
      "keywords": [
        "silly",
        "smiley",
        "emojione",
        "glasses",
        "boys night"
      ]
    }];

storiesOf('EmojiPane', module)
  .add('default', () => (
    <EmojiPane onSelected={action('selected')} />
  ))
  .add('with custom skin tone', () => (
    <EmojiPane onSelected={action('selected')} skinTone={3} />
  ))
  .add('with recents', () => (
    <EmojiPane onSelected={action('selected')} recents={recents} />
  ));
