/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat=function(ed){
  if(this.stomach.length < 10){
    this.stomach.push(ed);
  }
}

Person.prototype.poop = function(){
  this.stomach = []
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const kevin = new Person('Kevin', 26);
const leo = new Person('Leo', 18);

kevin.eat('pizza');
kevin.eat('taco');
kevin.eat('cake');
kevin.eat('pasta');
kevin.eat('sandvich');

console.log(kevin.stomach);

kevin.poop();

console.log(kevin.stomach);

console.log(kevin.toString);


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons){
   return this.tank += gallons;
}

const blyatMobile = new Car('Blyatmobile', 20);

console.log(blyatMobile.model);
console.log(blyatMobile.fill(20));
console.log(blyatMobile.tank);
console.log(blyatMobile.odometer);
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
 Person.call(this, name, age);
 this.favoriteToy = favoriteToy;
}
 Baby.prototype = Object.create(Person.prototype);
 Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}
const Child = new Baby('Da-bebe', 5, "trains")
Child.eat('baby food');
console.log(Child.name);
console.log(Child.age);
console.log(Child.stomach);
console.log(Child.favoriteToy);
console.log(Child.play());
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. window is when 'this' has no context and just throws everything at you
  2. implicit is when 'this' gets context through the Object it is in
  3. explicit is when you tell 'this' to mean something through .call, .apply or .bind
  4. newBinding is when 'this' gets it's context from a newly created Object
  extra. the 'this' keyword does not have context in arrow functions.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}