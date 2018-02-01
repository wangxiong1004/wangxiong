
// 引入模块
import _ from "lodash";
import './index.css';
import Code from './code_dyh.png';
import Data from './data.xml';

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["hello", "webpack"], " ");

  var myCode = new Image();
  myCode.src = Code;

  element.appendChild(myCode);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
