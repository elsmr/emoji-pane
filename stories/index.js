import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import EmojiPane from '../src/components/EmojiPane';

storiesOf('EmojiPane', module)
  .add('default', () => (
    <EmojiPane onSelected={action('selected')} />
  ));
