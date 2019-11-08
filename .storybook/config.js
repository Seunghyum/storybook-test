import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '!style-loader!css-loader!element-ui/lib/theme-chalk/index.css';

import ElementUI from './plugins.js';

ElementUI();

import { configure } from '@storybook/vue';

const req1 = require.context('../src', true, /\.stories.js$/);
const req2 = require.context('./components', true, /\.stories.js$/);

function loadStories() {
  req1.keys().forEach(filename => req1(filename));
  req2.keys().forEach(filename => req2(filename));
}

configure(loadStories, module);