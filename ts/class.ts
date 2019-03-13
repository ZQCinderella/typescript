// 先看一个简单的例子
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'hello ' + this.greeting
    }
}
let greeter = new Greeter('world');
console.log(greeter.greet());


// 继承
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    move(distanceMeters: number = 0) {
        console.log(`${this.name} moved ${distanceMeters}`)
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name)  // super()会执行基于基类的构造函数,在访问this之前必须调用super(),以便于把基类的this借用到子类
        console.log(this.name)
    }
    bark() {
        console.log('woof! woof!');
    }
    move(distanceMeters = 5) {
        console.log('running...')
        super.move(distanceMeters)
    }
}
class Horse extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distanceMeters = 45) {
        console.log('Galloping...')
        super.move(distanceMeters)
    }
}
let dog = new Dog('dog')
dog.move(100)
dog.bark()

let horse:Animal = new Horse('horse')
horse.move()


// 公共变量/方法
class Animals {
    // c成员默认都是公共的，不需要修饰
    public name: string;
    private age: number;
    protected gender: string;
    public constructor (theName: string, age: number, gender: string) {
        this.name = theName;
        this.age = age;
        this.gender = gender;
    }
    public move (distanceMeters: number) {
        console.log(`${this.name} moved ${distanceMeters}m.`);
    }
}
let cat = new Animals('cat', 10, '雌')
console.log(cat)
console.log(cat.name)
// console.log(cat.age)   // error  Property 'age' is private and only accessible within class 'Animals'. 实例不可访问私有属性

class Tiger extends Animals {
    // 默认值只有当参数===undefined时才生效
    constructor(name: string, age: number = 20, gender: string) {
        super(name, age, gender)
    }
    move () {
        // console.log(`I'm ${this.age}`)  // private属性不可在派生类中访问
        console.log(`我是${this.gender}性老虎`) // protected属性可以在派生类中访问
    }
}
let tiger = new Tiger('tiger', undefined, '雄')
console.log(tiger)
// console.log(tiger.gender); // 不能在类外部使用protected属性
tiger.move()

// 如果构造函数被protected， 那么该类不能实例化，但是可以被继承，继承后的类允许实例化

class Person {
    protected name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}
class Employee extends Person {
    private department: string;
    readonly age: number; // 只能在构造函数中初始化，不能通过实例去更改
    constructor (name: string, department: string, age: number) {
        super(name);
        this.department = department;
        this.age = age;
    }
    public getInfo () {
        return `hello, my name is ${this.name} and I work in ${this.department}`
    }
}

let howard = new Employee('Howard', 'Sales', 30)
// howard.age = '40' // error  Cannot assign to 'age' because it is a read-only property.
console.log(howard.getInfo());
// let john = new Person('John') // error Constructor of class 'Person' is protected and only accessible within the class declaration.



// 存取器
class User {
    private _fullname: any;
    pwd: string;
    constructor(pwd: string, fullname?: string) {
        this.pwd = pwd;
        this._fullname = fullname;
    }
    get fullname(): string {
        return this._fullname;
    }
    set fullname(newName: string) {
        if (this.pwd && this.pwd === 'secret pwd') {
            this._fullname = newName;
        } else {
            throw new Error('Error: Unauthorized update of user')
        }
    }
}
let user = new User('ok')
user.pwd = 'secret pwd';
user.fullname = 'fet';
if (user.fullname) {
    console.log('name:', user.fullname)
}


// 静态属性   即只能通过类明访问，不能使用this或者实例


// 抽象类
abstract class Department {  // 抽象类不能实例化，只能对派生类实例化
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    printName (): void {
        console.log(`Department name is ${this.name}`)
    }
    abstract printMeeting (): void;  // 抽象类的抽象方法只能声明，不能有具体实现
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Audition') // 派生类的构造函数中必须调用super
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
}

let department: Department;  // 允许创建抽象类的引用
// department = new Department();  // error  Cannot create an instance of an abstract class.

department = new AccountingDepartment();
department.printName()
department.printMeeting()