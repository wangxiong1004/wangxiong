import _ from 'lodash';
import printMe from './print.js';

function component() {
    var ele = document.createElement('div');
    var btn = document.createElement('button');

    ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';

    btn.onclick = printMe;

    ele.appendChild(btn);

    return ele;
}

document.body.appendChild(component());
