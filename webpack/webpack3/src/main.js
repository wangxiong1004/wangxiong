
import printMe from './print.js';

import './css/main.scss';
import './css/index.css';


document.body.innerHTML = "hello world - - can i use";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

if (module.hot) {
	module.hot.accept('./print.js', function() {
	    console.log('print js');
	    printMe();
	});
}