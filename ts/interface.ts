// 接口就用做为类型命名
// 不使用接口
function printLabel(labelObj: {label: string}) {
  console.log(labelObj.label)
}

let myObj = {size: 10, label: ' size 10 Object'}
printLabel(myObj)


// 使用接口
interface LabelValue {
  label: string;
}
function printLab(labelObj: LabelValue) {
  console.log(labelObj.label)
}
let myLabelObj = { size: 10, label: 'interface label'}

// 接口只关注外形，只要结构满足接口要求，并且属性存在，类型相同即可
printLab(myLabelObj)


// 可选属性
interface SqureConfig {
  color?: string;
  width?: number;
}

function createSqure(config: SqureConfig): {color: string, area: number} {
  let newSqure = { color: 'white', area: 100}
  if (config.color) {
    newSqure.color = config.color
  }
  if (config.width) {
    newSqure.area = config.width * config.width
  }
  config.color = 'blue'
  console.log(config)
  return newSqure
}
let mySqure = createSqure({color: 'black', width: 20})
console.log(mySqure)


// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20}
// point.x = 30 //  Cannot assign to 'x' because it is a read-only property.


// 数组的可读
let a: number[] = [1,2,3,4]
let roa: ReadonlyArray<number> = a
// roa[1] = 10 // Index signature in type 'ReadonlyArray<number>' only permits reading.
// roa.push(5) // Property 'push' does not exist on type 'ReadonlyArray<number>'.
// roa.length = 100 // Cannot assign to 'length' because it is a read-only property.

// 重新赋值给其他数组也不行，因为roa是只读，它没有一些可以修改数组的方法，所以不能直接赋值给数组
// a = roa  // Type 'ReadonlyArray<number>' is missing the following properties from type 'number[]': pop, push, reverse, shift, and 3 more.

// 但是可以用断言就行赋值
let b: number[] = roa as number[]
console.log(b)


// 函数类型的接口
interface FunInter {
  (source: string, subString: string): boolean;
}
let mySearch: FunInter
mySearch = function(source: string, subString: string) {
  let result = source.search(subString)
  return result > -1
}
console.log(mySearch('hello world', 'world'))

let mySearch2: FunInter
mySearch2 = function(sou: string, sub: string) {
  let result = sou.search(sub)
  return result > -1
}
// 函数类型的接口并不检查参数名称是否一致
console.log(mySearch2('hello kitty', 'kit'))


// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) { 
    console.log('counterFun', start)
    return '1234'    // 如果是指定了函数的返回类型，那么函数可以不返回任何内容。但是如果要返回，则必须是指定的类型
  }
  counter.interval = 123
  counter.reset = function () { console.log('reset') }
  return counter
}
let coun = getCounter()
let ret = coun(10)
console.log(typeof ret)
coun.reset()
//coun.interval = 50
console.log(coun)

// 实现接口
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): any;
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime (d: Date) {
    this.currentTime = d
  }
  constructor(h: Date, m:number){
    this.currentTime = h
  }
}

// 接口继承
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square = <Square>{}
console.log(square)
square.color = 'white'
square.sideLength = 10
square.penWidth = 20