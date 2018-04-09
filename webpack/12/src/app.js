

import base from './css/base.less'

var app = document.getElementById('app');
var div = document.createElement('div');
div.className = 'box';
app.appendChild(div);

import { a } from './common/util';

console.log(a);

// import { chunk } from 'lodash';
import { chunk } from 'lodash-es';

console.log(chunk([1, 2, 1, 3, 4], 2));


import './css/common.less'

$("div").addClass('new');