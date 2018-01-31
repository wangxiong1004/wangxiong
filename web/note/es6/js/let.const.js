// let
/*
 * ReferenceError: 引用错误
 * SyntaxError: 语法错误
 */

// 1.块级作用域
{
    let a = 10;
    var b = 20;
}
//console.log(a); // ReferenceError: a is not defined
console.log(b); // 20

for(let i = 0; i < 20; i++) {
    console.log(i); // 0 - 19
}
//console.log(i); // ReferenceError: i is not defined

for(var j = 0; j < 20; j++) {
    console.log(j); // 0 - 19
}
console.log(j); // 20

// 2.不存在变量提升
/*
 * var 执行步骤
 * var foo;
 * console.log(foo);
 * foo = 2;
 */
console.log(foo); // undefined
var foo = 2;

//console.log(bar);   // ReferenceError: bar is not defined
let bar = 10;

// 3.暂时性死区（temporal dead zone，简称 TDZ） -- 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
var temp = 123;
if(true) {
    console.log(typeof temp); // 报错
    temp = 'abc'; // ReferenceError: temp is not defined
    //  let temp;
}

if(true) {
    console.log(typeof fo); // 'undefined'
    var fo = "abx";
}

/*
 * x = y, y还没有声明，形成了死区
 */
//function bars(x = y, y = 2) {   // ReferenceError: y is not defined
//  return [x, y];
//}
//bars();

var x = x; // 不报错

//let z = z;  // ReferenceError: z is not defined

// 4.不允许重复声明
function func() {
    let a = 10;
    var a = 10;
}
//func(); // SyntaxError: Identifier 'a' has already been declared

function func2() {
    let a = 10;
    let a = 20;
}
//func2();    // SyntaxError: Identifier 'a' has already been

// 不能在函数内部重新声明参数
function func3(arg) {
    let arg;
}

//func3(20);  // SyntaxError: Identifier 'arg' has already been

function func4(age) {
    {
        let age = 30;
    }
}
func4(50); // ok

// 5.块级作用域

// es5--内层变量可能会覆盖外层变量。
/*
 * 变量提升造成了变量覆盖
 * function f() {
 *     var tmp;
 *     console.log(tmp);    // undefined
 *     if (false) {
 *         tmp = 'hello world';
 *     }
 * }
 */
var tmp = new Date();

function f() {
    console.log(tmp);
    if(false) {
        var tmp = 'hello world';
    }
}

f(); // undefined

// es5 --用来计数的循环变量泄露为全局变量。
var s = 'hello';
for(var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5

// es6
function f1() {
    let n = 5;
    if(true) {
        let n = 10;
    }
    console.log(n); // 5
}

// 允许块级作用域的任意嵌套。
{{{{{let insane = 'Hello World'}}}}};

// 外层作用域无法读取内层作用域的变量。
{{{{
  {let insane = 'Hello World'}
//console.log(insane); // 报错
}}}};

// 内层作用域可以定义外层作用域的同名变量。
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};

// 立即执行函数表达式（IIFE）
(function() {
    var tmp = '';
}());

// 块级作用域写法
{
    let tmp = "";
}


// 块级作用域与函数声明
// ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
/*
 * 不合法：
 * // 情况一
    if (true) {
      function f() {}
    }

    // 情况二
    try {
      function f() {}
    } catch(e) {
      // ...
    }
 */

// ES6 规定，明确允许在块级作用域之中声明函数。块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

// do表达式
//let m = do {
//  let t = f();
//  t * t + 1;
//}
//
//console.log(m);


/*
 * const声明一个只读的常量。一旦声明，常量的值就不能改变。
 * const的作用域与let命令相同：只在声明所在的块级作用域内有效。
 * const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
 */
const PI = 3.1415;
//PI = 2; // TypeError: Assignment to constant variable.
console.log(PI);

// es6六种声明变量的方法
// var function let const import class

// 顶层对象 window
var o = 123;
window.o; // 123

let c = 12;
window.c; // undefined

// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

// CommonJS 的写法
var global = require('system.global')();

// ES6 模块的写法
import getGlobal from 'system.global';
const global = getGlobal();

// CommonJS 的写法
require('system.global/shim')();

// ES6 模块的写法
import shim from 'system.global/shim';
shim();