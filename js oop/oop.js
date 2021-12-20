/*

let user = {
    
    // Properties
    FirstName: "aymen",
    LastName: "sami",
    Age: 23,
    adresses: {
        eg: "Giza",
        usa: "California",
        ksa: "Riyadh",
        
        getmainAdress: function () {
          return 'main adresse is in egypte in city ${user.adresses.eg}';
        },
    },
    
    // Methods
    
    //getFullName: function(){
      //  return 'Full Name: ${user.FirstName} ${user.LastName}';
    //},
    
    getFullName: () => 'Full Name: ${user.FirstName} ${user.LastName}',
    
    getAgeInDays: () => 'your age in days is ${user.Age}',
    
};

*/

/*
// accessing object properties  
console.log(user.FirstName); // Dot Notation
console.log(user["LastName"]) // Dot Brackets

console.log(typeof user.FirstName); // string
console.log(typeof user.LastName); // string
console.log(user.getFullName())
console.log(user.getAgeInDays())

console.log(user.adresses.getmainAdress())

*/


/*
let myObj2 = {
    name: "karim",
};

console.log(myObj2["name"])

let myObj3 = {
    "maorez!": 1,
};

console.log(myObj3["maorez!"])

*/

/*
// Defining Object With New Keyword

let user = new Object();

user.firstname = "karim";
user.lastName = "kouki";
user["age"] = 23;


user.getFullName = function () {
    return 'Full Name is${user.firstname}${user.lastName}';
};

console.log(user);
console.log(user.firstname);
console.log(user.lastName);
console.log(user["age"]);
console.log(user.getFullName());
*/

// Defining Object With Object.create

/*

let mainObj = {
    hasDiscount: false,
    showMsg: function () {
        return `you${mainObj.hasDiscount ? "" : " Dont"} have discount`
    },
};

console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());

let otherObj = Object.create(mainObj);

otherObj.hasDiscount = false;
console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());


let lastObj = Object.create(mainObj);
console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());
*/

// Defining Object With Object.assign

/*

const src1 = {
    prop1: "value1",
    prop2: "value2",
    methode1: function(){
        return `Methode 1`
    },
};

const src2 = {
    prop3: "value3",
    prop4: "value4",
    methode2: function(){
        return `Methode2`
    },
};

const target = {
    prop5: "value5",
};


Object.assign(target, src1, src2, {prop6: "value6"});

console.log(target);

const myObject = Object.assign({}, target,{prop7: "value7"});

console.log(myObject)
console.log(myObject.prop1)
console.log(myObject.prop2)

*/

// Delete Operator

/*

const admin = {name: "karim"};
console.log(admin)
console.log(admin.name)

delete admin.name;

delete admin["name"]

console.log(admin)
console.log(admin.name)

console.log("#".repeat(15));

const username = "karim";

console.log(username);

console.log(delete username);

console.log(username);

console.log("#".repeat(15));

const freezedObj = Object.freeze({age: "23"});
console.log(freezedObj)
console.log(freezedObj.age)

console.log(delete freezedObj)

console.log(freezedObj)
console.log(freezedObj.age);

console.log("#".repeat(15));

const eObj = {};

Object.defineProperty(eObj, "a", {value: 1, configurable: false});

console.log(eObj);
console.log(eObj.a)

console.log(delete eObj.a);

console.log(eObj);
console.log(eObj.a)

*/

// For In Loop With Object Properties
/*
let finalData = '';

const useraction = {
    name: "karim",
    adresse: "59 avenue de maamoun hammam sousse",
    age: 23,
};

for (let info in useraction){
    
    console.log(`the {info} is => ${useraction[info]}`);
    
    finalData += `<div>the ${info} is => ${useraction[info]}</div>`
}
console.log(finalData)

document.getElementById("info").innerHTML = finalData;
*/

// Constructor Function Introduction

/*
function Phone(serial, color, price) {
    this.serial = serial;
    this.color = color;
    this.price = price;
};

let phone1 = new Phone (123, "red", 500);
let phone2 = new Phone (123, "black", 500);
let phone3 = new Phone (123, "silver", 500);

console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price)

console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price); 

*/

// Constructor Function Advanced And New Keyword

/*
function swatch(serial) {
    console.log(this)
}

let swatch1 = new swatch(123456);
let swatch2 = new swatch(216648);
let swatch3 = new swatch(982345);

console.log(swatch1.serial);
console.log(swatch2.serial);
console.log(swatch3.serial);

console.log(swatch1 instanceof swatch);
console.log(swatch2 instanceof swatch);
console.log(swatch3 instanceof swatch);

function sayHello(someone) {
    return `hello ${someone}`
}

console.log(sayHello("karim"))
*/

// Constructor Function Dealing With Properties

/*

function person(fName, lName, age, country){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.country = country;
    
    this.fullName = function() {
        return `Full Name: ${this.fName} ${this.lName}`
    }
    this.ageInDays = function() {
        return `age in days of karim is ${this.age * 365}`
    }
}

let person1 = new person("karim", "kouki", 23, "Tunisie");
let person2 = new person("azer", "ouni", 26, "kurdistan");

console.log(person1)

console.log(`Full Name: ${person1.fName} ${person1.lName} ${person1.country}`);
console.log(`Full Name: ${person2.fName} ${person2.lName} ${person2.country}`);
console.log(person1.ageInDays())

*/

// Constructor Function Training's

/*

function User(name, email, age, showEmail) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.updateName = function(newName){
        if (this.age > 18){
            this.name = newName
        } else {
            console.log("you can't update this name")
        }
    };
    
    this.showEmail = function () {
        if (showEmail === true) {
            return `Email is: $(this.email)`
        } else {
            return `Data Is Private`
        }
    };
}

let user1 = new User("karim", "karim.tn", 19, true);
console.log(user1.name);
user1.updateName("Ahmed");
console.log(user1.name);
console.log(user1.showEmail())

*/

// Constructor Function Built In Constructors

/*
function User(name) {
    this.name = name;
    this.welcome = function() {
        return `Welcome ${this.name}`;
    };
}

let user1 = new User("karim");
let user2 = new User("karim");

// let obj1 = new Object({ a: 1});
// let obj2 = new Object({ b: 2});

let num1 = new Number(1)
let num2 = new Number(2);

let str1 = new String("osama");
let str2 = new String("mahmoud");
let str3 = "mahmoud";
*/

// Prototype Part 1 Intro

/*

function User(name){
    this.name = name;
    this.welcome = function () {
        return `welcome ${this.name}`;
    }
}

let user1 = new User("karim");
let user2 = new User("aymen");

console.log(User.prototype);



const arr = [1, 2, 3];

console.log(Array.prototype);
*/
  
// Prototype Part 2 Add To Prototype Chain

/*

function User(name){
    this.name = name;
    this.welcome = function () {
        return `welcome ${this.name}`;
    }
}

let user1 = new User("karim");
let user2 = new User("aymen");

console.log(User.prototype);
console.log(user1)

User.prototype.addTitle = function () {
    return `Mr. ${this.name}`;
};

console.log(Object.prototype);

Object.prototype.karim  = "Welcome back";

const myObject = {a:1, b: 2};

*/

// Prototype Part 3 Extend Constructors Features

/*
let mySting = "karim";

console.log(String.prototype);

String.prototype.zFill = function(width){
    let theResult = this;
    
    while(theResult.length < width) {
        theResult = `0${theResult}`;
    }
    
    return theResult.toString();
}

console.log("12", zFill(6));
console.log("516", zFill(6));
console.log("3625", zFill(6));
console.log("25145", zFill(6));

String.prototype.sayYouloveMe = function () {
    return `I Love you ${this}`;
}

console.log("karim".sayYouloveMe())

*/

// Prototype Part 4 Prototype Chain

/*

function User(name) {
    

    

    this.name = name;
    
    
        [4] Return The new Object
        Return this
   
    
    if(!(this instanceof User)) {
        // throw new Error("must be called with new keyword)
        
        console.log("error")
    }
    
    
}


let user1 = new User("karim");
let user2 = User("ahmed");
console.log(User.prototype);

console.log(user1);

let myArray = [1, 2, 3, 4]

 // Class Syntax And Introduction

class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    
    sayHello() {
        return `Hello ${this.name}`
    }
    sayHello() {
        return `Hello ${this.email}`
    }
}

let user3 = new user("karim", "karim.tn");
let user4 = new user("ahmed");
console.log(user3);
console.log(user4);

*/

// Class Static Properties And Methods
/*
class Admin {
    static counter = 100;

    constructor(name, email, counter) {
        this.name = name;
        this.email = email;
        Admin.counter++;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
    showEmail() {
        return `Your Email is ${this.email}`;
    }

        static countObjects = function() {
            return `${this.counter} Object Created`;
        }
}

let Admin1 = new Admin("karim", "karim.tn", 2);
let Admin2 = new Admin("sami", "karim.tn", 2);
let Admin3 = new Admin("ahmed", "karim.tn", 2);
let Admin4 = new Admin("youssef", "karim.tn", 2);

console.log(typeof User); // function
console.log(Admin === Admin.prototype.constructor); // true
console.log(Admin2.countObjects())
*/
  // class inheritance
/*
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
    
    showEmail() {
        return `your email is  ${this.email}`;
    }
    Writingmsg(){
        return `Message From Parent Class`
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email)
    }
    adminMsg() {
        return `You are Admin`;
    }
    
}

let admin1 = new Admin("karim", "kari@m.tn")

*/

// JavaScript Accessors Getters & Setters

/*

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
    
    get showInfo() {
        return `Name: ${this.name}, Email" ${this.email}`
    }
    changeName(newName) {
        this.name = newName;
    }
    set changeEmail(newEmail) {
        this.email = newEmail
    }
}

let user1 = new User("karim", "kari@m.tn");
console.log(user1.name);
console.log(user1.email)
console.log(user1.showInfo);

user1.changeName("karim")
console.log(user1.name);
console.log(user1.showInfo)
*/

// Object Meta Data And Descriptor

/*
const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperty(myObject, "c", {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 3,
});

console.log(delete myObject.c); // will not delete because configurable is false
myObject.c = 500; // Will not change Because Writable is false

console.log(myObject);

console.log("#".repeat(10));

console.log(Object.getOwnPropertyNames(myObject));

*/

// Object Define Properties And Training's

const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperty(myObject, "a", {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 500,
});

Object.defineProperty(myObject, "c", {
    value: 3,
});

myObject.d = 4;

Object.defineProperties(myObject, {
    e: {
     writable: false,
    enumerable: false,
    configurable: false,
    value: 5,
    },
    f: {
     writable: false,
    enumerable: false,
    configurable: false,
    value: 6,
    },
    g: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 7,
    },
});


console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));

console.log(Object.getOwnPropertyNames(myObject))
console.log(Object.keys(myObject))