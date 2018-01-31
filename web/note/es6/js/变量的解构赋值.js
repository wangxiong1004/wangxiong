/*
 * 1. 数组的解构赋值 -- 解构Destructuring
 *
 */
let a = 11;
let b = 22;
let c = 33;

let [a, b ,c] = [11, 22, 33];

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

// 解构不成功，变量的值就等于undefined。
let [foo] = [];
let [bar, foo] = [1];

// 默认值
let [foo = true] = [];  // foo = true

let [x, y = 'b'] = ['a'];   // x = 'a', y = 'b'

let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

// undefined 只有当一个数组成员严格等于undefined，默认值才会生效。
let [c = 2] = [undefined];  // c = 2
let [d = 2] = [null];       // d = null
