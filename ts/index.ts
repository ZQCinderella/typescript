interface Person {
    firstName: string;
    lastName: string;
}
function greeter (person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
document.body.innerHTML = greeter({
    firstName: '冯',
    lastName: '二通'
});

let arr: number[] = [1,2,3,4]
// 使用泛型声明数组
let arr2: Array<number> = [2,3,4,5]

// 类型断言
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
console.log(someValue, strLength)

// 使用as进行断言
let str: any = 'this is a string'
// as 后面跟类型
let strLen: number = (str as string).length
console.log(str, strLen)
