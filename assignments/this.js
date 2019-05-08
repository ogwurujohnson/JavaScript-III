/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global object binding
* 2. implicit binding
* 3. new binding
* 4. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function bark(sound) {
    console.log(this);
    return sound;
}
console.log(bark('woof woof'));
// Principle 2

// code example for Implicit Binding
const johnson = {
    name: 'Johnson',
    nickname: 'Johnny',
    speak() {
        return `Hi, i am ${this.name}, but my friends call me ${this.nickname}`;
    },
}

console.log(johnson.speak());

// Principle 3

// code example for New Binding
function Laptop(name, os) {
    this.os = os
    this.name = name;
    this.intro = function() {
        return `Hello welcome to ${name}, i run on ${os}`;
    }
}
const samsung = new Laptop('samsung', 'windows');
console.log(samsung.intro());

// Principle 4

// code example for Explicit Binding
function Laptop(name, os) {
    this.os = os
    this.name = name;
    this.intro = function() {
        return `Hello welcome to ${name}, i run on ${os}`;
    }
}
const macbook = new Laptop('mackbook pro', 'ios');
const laptopExchange  = macbook.intro;
console.log(laptopExchange.call(macbook));
// or
console.log(laptopExchange.apply(macbook));