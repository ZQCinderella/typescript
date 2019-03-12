// 接口就用做为类型命名
// 不使用接口
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: ' size 10 Object' };
printLabel(myObj);
function printLab(labelObj) {
    console.log(labelObj.label);
}
var myLabelObj = { size: 10, label: 'interface label' };
// 接口只关注外形，只要结构满足接口要求，并且属性存在，类型相同即可
printLab(myLabelObj);
function createSqure(config) {
    var newSqure = { color: 'white', area: 100 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    config.color = 'blue';
    console.log(config);
    return newSqure;
}
var mySqure = createSqure({ color: 'black', width: 20 });
console.log(mySqure);
var point = { x: 10, y: 20 };
// point.x = 30 //  Cannot assign to 'x' because it is a read-only property.
// 数组的可读
var a = [1, 2, 3, 4];
var roa = a;
// roa[1] = 10 // Index signature in type 'ReadonlyArray<number>' only permits reading.
// roa.push(5) // Property 'push' does not exist on type 'ReadonlyArray<number>'.
// roa.length = 100 // Cannot assign to 'length' because it is a read-only property.
// 重新赋值给其他数组也不行，因为roa是只读，它没有一些可以修改数组的方法，所以不能直接赋值给数组
// a = roa  // Type 'ReadonlyArray<number>' is missing the following properties from type 'number[]': pop, push, reverse, shift, and 3 more.
// 但是可以用断言就行赋值
var b = roa;
console.log(b);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch('hello world', 'world'));
var mySearch2;
mySearch2 = function (sou, sub) {
    var result = sou.search(sub);
    return result > -1;
};
// 函数类型的接口并不检查参数名称是否一致
console.log(mySearch2('hello kitty', 'kit'));
var square = {};
console.log(square);
square.color = 'white';
square.sideLength = 10;
