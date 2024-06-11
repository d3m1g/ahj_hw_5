import Popovers from './Popovers';

const parentEl = document.querySelector('body');

const popovers = new Popovers(parentEl);
popovers.bindToDOM();