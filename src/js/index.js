import '../scss/main.scss';
import { scroll } from './scroll.js';
import { anchors } from './anchors.js';
import { validation } from './validation';

$(function() {
  scroll();
  anchors();
  validation();
})


