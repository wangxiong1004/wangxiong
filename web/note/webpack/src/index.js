
// 引入模块
import _ from "lodash";
import printMe from './print.js';

import { cube } from './math.js';

import './index.css';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like me are in development mode!');
}

function component() {
  var element = document.createElement("div");
  var btn = document.createElement('button');

  element.innerHTML = _.join(["hello", "webpack", "5 cubed is equal to " + cube(5)], " ");
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());
let element = component();  // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
	module.hot.accept('./print.js', function() {
	  console.log('Accepting the updated printMe module!');
	  // printMe();
	  document.body.removeChild(element);
	  element = component(); // 重新渲染页面后，component 更新 click 事件处理
	  document.body.appendChild(element);
	});
}
