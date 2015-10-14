require('babel/polyfill');

var log = (message) =>
  console.log(message);

log('Hello Babel!');


import * as math from './lib/math.js';
log('2π = ' + math.sum(math.pi, math.pi));
