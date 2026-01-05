👉 Object-oriented programming (OOP) is a programming paradigm [Style of code — “how” we write and organize code] based on the concept of objects

👉 We use objects to model (describe) real-world [E.g. user or todo list item] or abstract features [E.g. HTML component or data structure]

👉 Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block;

👉 In OOP, objects are self-contained pieces/blocks of code;

👉 Objects are building blocks of applications, and interact with one another;

👉 Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object;

👉 OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid “spaghetti code”).

======================================================================================================

1. Abstraction: Ignoring or hiding details that don’t matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don’t really matter to our implementation.

-Hides unnecessary details
-Shows only what is important
-Helps focus on what an object does, not how it does it

2. Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).

-Data can be made private (hidden)
-Only necessary methods are exposed publicly

3. Inheritance: Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

-Child class gets properties & methods of parent class
-Helps reuse code
-Creates hierarchical relationships

4. Polymorphism: A child class can overwrite a method it inherited from a parent class [it’s more complex than that, but enough for our purposes].

-Same method name → different behavior in different classes
-Child class can override parent class methods

======================================= Prototype in js =========================

-Objects are linked to a prototype object;

-Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype;

-Behavior is delegated to the linked prototype object;

Prototype: (Contains methods)

Object:(Can access methods)

3 ways of implementing prototypal inheritance in JavaScript are:

1. Constructor Functions
   Technique to create objects from a function
   This is how built-in objects like Arrays, Maps or Sets are actually implemented

2. ES6 Classes
   Modern alternative to constructor function syntax
   “Syntactic sugar”: behind the scenes, ES6 classes work exactly like constructor functions
   ES6 classes do NOT behave like classes in “classical OOP”

3. Object.create()
   The easiest and most straightforward way of linking an object to a prototype object

=======================================================================================

new operator: The new operator is used to create an instance of an object from a constructor function or class.

const user = new Person("John");

JavaScript does 4 things automatically:

1. A new empty object is created
2. The object is linked to the constructor’s prototype
3. this inside the constructor points to the new object
4. The object is returned automatically

Ex.
const Person = function (firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;
};

console.log(new Person('Nivi', 2001));
console.log(new Person('Pranit', 2000));

instanceof Operator:
The instanceof operator checks if an object was created from a specific constructor (or belongs to its prototype chain).
Ex.
const nivi = new Person('Nivi', 2001);
const jay = 'abc';

console.log(nivi instanceof Person); //true
console.log(jay instanceof Person); //false

============================================================================================

Prototype:
In JavaScript, objects can inherit properties and methods from another object through a special internal link called prototype.
Constructor functions + prototype together help us create many objects efficiently and share common methods.

Ex.
Person.prototype.calcAge = function () {
console.log(2037 - this.birthYear);
};

Prototypal inheritance using constructor functions allows:
Creating objects with a blueprint (constructor)
Sharing methods using .prototype
Reusing functionality using inheritance chain

1. Person.prototype.isPrototypeOf(object)
   Checks whether Person.prototype exists in the prototype chain of the given object.
   Returns true or false.
   Ex. console.log(Person.prototype.isPrototypeOf(nivi)); //true
   console.log(Person.prototype.isPrototypeOf(Person)); //false

2. **proto**(consider ** as a underscore)
   It is an internal reference that points to the prototype object from which it inherits.
   Every created object automatically has a **proto\*\* property.
   Ex. console.log(nivi.**proto**);

Add property in the prototype:

Properties added on prototype are shared
Ex.Person.prototype.species = 'Devil';
console.log(nivi.species);

hasOwnProperty(): Used to check if a property exists directly on the object itself, NOT on the prototype.

Ex.console.log(nivi.hasOwnProperty('firstName')); //true
console.log(nivi.hasOwnProperty('species')); //false

============================================================================================================

How Prototypal Inheritance / Delegation Works

1️⃣ Constructor Function
const Person = function(name, birthYear) {
this.name = name;
this.birthYear = birthYear;
};

Acts like a blueprint for creating objects.
Defines properties that will exist on each object made using new.

2️⃣ Prototype
Every constructor function automatically gets a property called:
Person.prototype
This prototype object is not the prototype of the constructor itself — it is the prototype of objects created by Person.
You add shared methods here → more memory-efficient.

Example:
Person.prototype.calcAge = function() { ... };

3️⃣ The new Operator – What Happens Behind the Scenes
When you call:
const jonas = new Person('Jonas', 1990);

The new keyword performs 4 steps:
Step Description
1️⃣ Creates a new empty object
2️⃣ Sets this inside the constructor function → refers to that new object
3️⃣ Links the new object to the constructor’s prototype → sets jonas.**proto** = Person.prototype
4️⃣ Returns the new object automatically

Every object has an internal link called:
**proto**

It always points to the object's prototype.

For objects created with new Person():
jonas.**proto** === Person.prototype // true

This enables delegation:
If property/method is not on the object → JavaScript looks for it on the prototype.

5️⃣ Final Object Structure Example
const jonas = new Person('Jonas', 1990);

Inside jonas:
name: "Jonas"
birthYear: 1990
**proto**: Person.prototype ← where calcAge() lives

==========================================================================================

The Prototype Chain

🔹 What is the Prototype Chain?
A series of linked objects, connected through their **proto** reference.
If JavaScript cannot find a property/method on the object itself → it walks up the prototype chain to search.
Works similar to the scope chain, but for objects and inheritance.

🔹 Built-in Constructor Function – Object()
JavaScript provides a built-in constructor for creating basic objects:
{} === new Object()
Every object in JavaScript ultimately inherits from:
Object.prototype
And at the top of the chain:
Object.prototype.**proto** === null

🔹 Custom Constructor Function – Person()
function Person() {}
When using new Person(), a new object is created and linked to:
Person.prototype
Important: Person.prototype is itself an object, meaning:
Person.prototype.**proto** === Object.prototype

🔹 Prototype Chain Flow (Bottom → Top)
For an object created with new Person():
jonas → **proto** → Person.prototype → **proto** → Object.prototype → **proto** → null

Walking the chain 🔼:
1️⃣ jonas (object instance)
2️⃣ Delegates missing properties → Person.prototype
3️⃣ Delegates again → Object.prototype
4️⃣ End of chain → null

🔹 Why This Matters
Enables inheritance and method sharing.
Example: jonas.toString() works even if you didn’t define toString — because it exists inside Object.prototype.

=========================== ES6 Classes =============================================

ES6 Classes are a new syntax introduced in EES6 that provide a cleaner and more structured way to create objects and implement object-oriented programming in JavaScript.
But internally, classes still use prototypes — it is just syntactic sugar over prototype-based OOP.

Basic Structure
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

// Method
greet() {
console.log(`Hello, I am ${this.name}`);
}
}

const p1 = new Person("John", 25);
p1.greet();

✨ Key Points
constructor() runs automatically when object is created.
Methods inside a class are added to prototype.
Use new keyword to create objects.

==========================================================================================

Getter and Setter Functions in OOP (JavaScript)
Getters and Setters are special methods used to access and update object properties in a controlled way.
They help in encapsulation—one of the core OOP principles.

🔹 What is a Getter?
-Used to read/access a property
-Looks like a property but works like a function
-Defined using the get keyword

🔹 What is a Setter?
-Used to update/modify a property
-Allows validation or logic before setting a value
-Defined using the set keyword

class Person {
constructor(name, age) {
this._name = name; // convention: _ means "private-like"
this.\_age = age;
}

// Getter
get name() {
return this.\_name;
}

// Setter
set name(newName) {
if (newName.length < 3) {
console.log("Name is too short");
} else {
this.\_name = newName;
}
}

// Getter
get age() {
return this.\_age;
}

// Setter
set age(newAge) {
if (newAge < 0) {
console.log("Age cannot be negative");
} else {
this.\_age = newAge;
}
}
}
//op

const p1 = new Person("Riya", 22);

console.log(p1.name); // Getter → Riya
p1.name = "An"; // Setter → Name is too short
p1.age = 25; // Setter
console.log(p1.age); // Getter → 25

===============================================================================================

Static Method in OOP (JavaScript)
A static method is a method that belongs to the class itself, not to the objects (instances) created from the class.
👉 It is called directly using the class name, not using this or object reference.

🔹 Key Points
-Defined using the static keyword
-Cannot be called on class instances
-Commonly used for utility/helper functions
-Cannot access instance properties directly

📌 Example: Static Method in Class
class MathUtils {
static add(a, b) {
return a + b;
}

static multiply(a, b) {
return a \* b;
}
}

🔸 Usage
console.log(MathUtils.add(10, 5)); // 15
console.log(MathUtils.multiply(4, 3)); // 12

❌ Invalid:
const obj = new MathUtils();
obj.add(2, 3); // Error

=============================================================================

Object.create() in JavaScript

Object.create() is used to create a new object with a specified prototype.
It allows direct prototypal inheritance without using constructor functions or classes.

Object.create(proto);
proto → the object that should be the prototype of the new object

const person = {
greet() {
console.log("Hello!");
}
};

const student = Object.create(person);

student.name = "Nivedita";
student.greet(); // Hello!

student inherits methods from person.

========================================================================================

Inheritance between constructor functions

const Person1 = function (firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
// this.firstName = firstName;
// this.birthYear = birthYear;
Person1.call(this, firstName, birthYear);
this.course = course;
};

//Link the prototype
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
console.log(`My name is ${this.firstName} & I am studying ${this.course}`);
};

const nivedi = new Student('Nivedita', 2000, 'Javascript');
nivedi.introduce();
nivedi.calcAge();

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(nivedi);

===========================================================================

Inheritance in ES6 Classes (JavaScript)

Inheritance allows one class (child/subclass) to reuse the properties and methods of another class (parent/superclass).
In ES6, inheritance is implemented using the extends keyword.

🔹 super Keyword:
super() → calls the parent class constructor
super() → mandatory in child constructor before using this

Example:

class StudentCl extends PersonCl1 {
constructor(fullName, birthYear, course) {
super(fullName, birthYear);
this.course = course;
}

introduce() {
console.log(`My name is ${this._fullName} & I am studying ${this.course}`);
}

calcAge() {
console.log(`I am a ${2037 - this.birthYear} years old`);
}
}

const student = new StudentCl('Niviiiii Watpade', 2000, 'React Js');
console.log(student);
student.introduce();
student.calcAge();

=======================================================================

Inheritance between Classes using Object.create()

Object.create() is a pure prototypal inheritance approach (ES5 style) that allows one object to inherit directly from another object—without using classes or constructors.

Ex.
//Inheritance between classes : Object.create()

const PersonProto1 = {
calcAge() {
console.log(2037 - this.birthYear);
},

init(firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;
},
};

const StudentProto = Object.create(PersonProto1);

StudentProto.init = function (firstName, birthYear, course) {
PersonProto1.init.call(this, firstName, birthYear);
this.course = course;

console.log(`My name is ${this.firstName} & I am studying ${this.course}`);
};

StudentProto.introduce = function () {
console.log(`My name is ${this.firstName} & I am studying ${this.course}`);
};

const ajay = Object.create(StudentProto);

ajay.init('Niveditaaaa', 2000, 'JS');
ajay.introduce();
ajay.calcAge();

=============================================================================================

Encapsulation: Private class Fields & Methods

Private fields & methods (#) are ES2022 feature
They cannot be accessed or overridden outside the class
Provides true encapsulation (unlike \_private naming convention)

Public Fields:
-Accessible outside the class
-Defined normally (no #)

Private Fields:
-Prefixed with #
-Accessible only inside the class

Public Methods:
-Called using object reference
-login() {}

Private Methods
-Also prefixed with #
-Used internally only

Ex.
class User {
// 1️⃣ Public field
role = "User";

// 2️⃣ Private field
#password;

constructor(name, password) {
this.name = name; // public property
this.#password = password; // private field
}

// 3️⃣ Public method
login() {
if (this.#checkPassword()) {
console.log(`${this.name} logged in`);
} else {
console.log("Invalid password");
}
}

// 4️⃣ Private method
#checkPassword() {
return this.#password === "1234";
}
}

const user1 = new User("Nivedita", "1234");
user1.login(); // ✅ Works
console.log(user1.role); // ✅ Public field

// ❌ Errors (private members not accessible)
// console.log(user1.#password);
// user1.#checkPassword();
