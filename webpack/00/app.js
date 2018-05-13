// es6 module
import sum from './sum.js';

// commonjs
var minus = require('./minus.js');

// amd
require(['./muti.js'], function(muti) {
    console.log('muti(20, 40) = ', muti(20, 40));
});

console.log('sum(20, 40) = ', sum(20, 40));
console.log('minus(20, 40) = ', minus(20, 40));
