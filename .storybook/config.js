import { configure } from '@kadira/storybook';
import '../src/scss/main.scss';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
