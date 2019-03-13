// 泛型--更灵活的去定义数据类型
// example1  使参数和返回值类型相同。
// 这样写只能使用number一种数据类型
function identity(x) {
    return x;
}
// 这样写虽然不限制输入的类型，但是也没限制输出的类型
function identity2(x) {
    return x;
}
// 使用泛型 的类型变量，它是特殊的变量，只代表类型，不代表值
// T会捕获调用时传入的类型，然后再次使用T作为返回类型
function identity3(x) {
    return x;
}
var output = identity3('str'); // output也是string类型
console.log(typeof output);
// 或者使用类型推论，让编译器自己去确定类型
var output1 = identity3('str');
// 参数类型不一定是T， 可以是参数的内容是T类型
function logging(args) {
    return args;
}
function identity4(arg) {
    return arg;
}
// 这样有一个缺点是无法体现出接口的泛型类型
var myIdent = identity4;
function identity5(arg) {
    return arg;
}
var myIdent2 = identity5;
console.log(myIdent2('str'));
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber);
