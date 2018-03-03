// import './css/base.css';


import base from './css/base.css';
var app = document.getElementById('app');
app.innerHTML = '<div class="'+base.box+'"></div>'

// style-loader/unabel
// import base from './css/base.css';
// import common from './css/common.css';

// base.use();
// base.unuse();

// var flag = false;
//
// setInterval(function() {
  // if (flag) {
  	// base.use();
  // } else {
    // base.unuse();
  // }
  // flag = !flag;
// }, 500)


import './css/basic.less';


import './css/module.scss';

import(/* webpackChunkName:'a' */ './components/a').then(function(a) {
  console.log(a);
})
