var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 先看一个简单的例子
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter.greet());
// 继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceMeters) {
        if (distanceMeters === void 0) { distanceMeters = 0; }
        console.log(this.name + " moved " + distanceMeters);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) // super()会执行基于基类的构造函数,在访问this之前必须调用super(),以便于把基类的this借用到子类
         || this;
        console.log(_this.name);
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log('woof! woof!');
    };
    Dog.prototype.move = function (distanceMeters) {
        if (distanceMeters === void 0) { distanceMeters = 5; }
        console.log('running...');
        _super.prototype.move.call(this, distanceMeters);
    };
    return Dog;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceMeters) {
        if (distanceMeters === void 0) { distanceMeters = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distanceMeters);
    };
    return Horse;
}(Animal));
var dog = new Dog('dog');
dog.move(100);
dog.bark();
var horse = new Horse('horse');
horse.move();
// 公共变量/方法
var Animals = /** @class */ (function () {
    function Animals(theName, age, gender) {
        this.name = theName;
        this.age = age;
        this.gender = gender;
    }
    Animals.prototype.move = function (distanceMeters) {
        console.log(this.name + " moved " + distanceMeters + "m.");
    };
    return Animals;
}());
var cat = new Animals('cat', 10, '雌');
console.log(cat);
console.log(cat.name);
// console.log(cat.age)   // error  Property 'age' is private and only accessible within class 'Animals'. 实例不可访问私有属性
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    // 默认值只有当参数===undefined时才生效
    function Tiger(name, age, gender) {
        if (age === void 0) { age = 20; }
        return _super.call(this, name, age, gender) || this;
    }
    Tiger.prototype.move = function () {
        // console.log(`I'm ${this.age}`)  // private属性不可在派生类中访问
        console.log("\u6211\u662F" + this.gender + "\u6027\u8001\u864E"); // protected属性可以在派生类中访问
    };
    return Tiger;
}(Animals));
var tiger = new Tiger('tiger', undefined, '雄');
console.log(tiger);
// console.log(tiger.gender); // 不能在类外部使用protected属性
tiger.move();
// 如果构造函数被protected， 那么该类不能实例化，但是可以被继承，继承后的类允许实例化
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department, age) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        _this.age = age;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        return "hello, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee;
}(Person));
var howard = new Employee('Howard', 'Sales', 30);
// howard.age = '40' // error  Cannot assign to 'age' because it is a read-only property.
console.log(howard.getInfo());
// let john = new Person('John') // error Constructor of class 'Person' is protected and only accessible within the class declaration.
// 存取器
var User = /** @class */ (function () {
    function User(pwd, fullname) {
        this.pwd = pwd;
        this._fullname = fullname;
    }
    Object.defineProperty(User.prototype, "fullname", {
        get: function () {
            return this._fullname;
        },
        set: function (newName) {
            if (this.pwd && this.pwd === 'secret pwd') {
                this._fullname = newName;
            }
            else {
                throw new Error('Error: Unauthorized update of user');
            }
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var user = new User('ok');
user.pwd = 'secret pwd';
user.fullname = 'fet';
if (user.fullname) {
    console.log('name:', user.fullname);
}
// 静态属性   即只能通过类明访问，不能使用this或者实例
// 抽象类
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name is " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Audition') || this; // 派生类的构造函数中必须调用super
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建抽象类的引用
// department = new Department();  // error  Cannot create an instance of an abstract class.
department = new AccountingDepartment();
department.printName();
department.printMeeting();
