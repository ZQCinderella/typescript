// 泛型--更灵活的去定义数据类型

// example1  使参数和返回值类型相同。

// 这样写只能使用number一种数据类型
function identity (x: number): number {
    return x;
}

// 这样写虽然不限制输入的类型，但是也没限制输出的类型
function identity2(x: any): any {
    return x;
}

// 使用泛型 的类型变量，它是特殊的变量，只代表类型，不代表值
// T会捕获调用时传入的类型，然后再次使用T作为返回类型
function identity3<T>(x: T): T {
    return x;
}

let output = identity3<string>('str') // output也是string类型
console.log(typeof output)

// 或者使用类型推论，让编译器自己去确定类型
let output1 = identity3('str')

// 参数类型不一定是T， 可以是参数的内容是T类型
function logging<T>(args: Array<T>): Array<T> {
    return args
}
logging<string>(['a','b']) // ok
// logging<string>([1,3]) // error  Type 'number' is not assignable to type 'string'.



// 泛型接口
interface GenericIdentityFn {
    <T>(args: T) : T
}
function identity4<T>(arg: T): T {
    return arg;
}
// 这样有一个缺点是无法体现出接口的泛型类型
let myIdent: GenericIdentityFn = identity4

interface GenericIdentityFn2<T> {
    (args: T) : T
}
function identity5<T>(arg: T): T {
    return arg;
}
let myIdent2: GenericIdentityFn2<string> = identity5
console.log(myIdent2('str'))


// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
    name!: T;   // !: 表示忽略其初始化
    /**
     * 如果不写constructor去初始化实例属性或方法，则需要打开"strictPropertyInitialization": false,
    constructor(zeroValue: T, fn: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = fn;
    }
     */
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) { return x + y }
console.log(myGenericNumber)