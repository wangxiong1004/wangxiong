
//import * as _ from 'lodash';

//_.chunk([1, 2, 3, 4, 5], 2);

// 基础类型
let isDore: boolean = false;

let num: number = 10;

let names: string = "zhangsan";
let sex: string = `boy`;
let job: string = `${ names } sex is ${ sex }`;

let arr: number[] = [1, 2, 3, 4];
let list: Array<number> = [1, 2, 3];

let x: [string, number];

x = ["shanghai", 20];
x[3] = 0;

enum Color {red, green, blue};

let c: Color = Color.green;
console.log(c); // 1

//enum Color {Red = 1, Green, Blue}
//let c: Color = Color.Green;

//enum Color {Red = 1, Green = 2, Blue = 4}
//let c: Color = Color.Green;

let notSure: any = 4;
notSure = "can i use";

let lists: any[] = [1, true, "free"];
lists[1] = 100;


var str: void = undefined;

let obj: void = null;

function warnUser(): void {
    alert("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;