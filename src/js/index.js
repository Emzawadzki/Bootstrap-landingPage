import '../scss/main.scss';
import { scroll } from './scroll.js';
import { anchors } from './anchors.js';
import { validation } from './validation.js';
import { menu } from './menu.js';

$(function() {
  scroll();
  anchors();
  validation();
  menu();
})


