
import base from './css/base.less';

import './css/common.less'

var app = document.getElementById("app");
app.innerHTML = '<div class="' + base.box + '"></div>';

import(/*webpackChunkName: 'a'*/'./components/a').then(function(a) {
    console.log(a);
})

// import base from './css/base.css';

// import common from './css/common.css'

// base.use();
// base.unuse();

// var flag = false;

// setInterval(function() {
//     if (flag) {
//         base.use();
//     } else {
//         base.unuse();
//     }
//     flag = !flag;
// }, 500);