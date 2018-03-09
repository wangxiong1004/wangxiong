
// require.include('./moduleA');

import * as _ from 'lodash';

var page = 'subPageA';
if (page === 'subPageA') {
    import(/* webpackChunkName:'subPageA */'./subPageA').then(function(subPageA) {
        console.log('./subPageA');
    });
} else if (page === 'subPageB') {
    import(/* webpackChunkName:'subPageB */'./subPageB').then(function(subPageB) {
        console.log('./subPageB');
    });
}

// require.ensure(['lodash'], function() {
//     var _ = require('lodash');
//     _.join([1, 2], 3);
// }, 'vendor');

export default 'pageA';