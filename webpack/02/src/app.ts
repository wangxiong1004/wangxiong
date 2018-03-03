
import * as _ from 'lodash';

_.chunk([1, 2, 3, 4, 5], 2);

const NUM: number = 200;

interface Cat {
  name: string,
  gender: string
}

function touchCat(cat: Cat) {
  console.log('miao~' + cat.name);
}

touchCat({
  name: 'tom',
  gender: 'male'
})
