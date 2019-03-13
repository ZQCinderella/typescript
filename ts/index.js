"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
document.body.innerHTML = greeter({
    firstName: '冯',
    lastName: '二通'
});
var arr = [1, 2, 3, 4];
// 使用泛型声明数组
var arr2 = [2, 3, 4, 5];
// 类型断言
var someValue = 'this is a string';
var strLength = someValue.length;
console.log(someValue, strLength);
// 使用as进行断言
var str = 'this is a string';
// as 后面跟类型
var strLen = str.length;
console.log(str, strLen);
