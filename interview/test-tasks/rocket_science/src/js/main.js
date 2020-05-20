require('../scss/styles.scss');
require('./lib/bootstrap');

import {polyfills} from './scripts/polyfills';
import {chat} from './scripts/chat';

polyfills();
chat();