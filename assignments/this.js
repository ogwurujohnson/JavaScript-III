/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global object binding
       * - this principle implies that the 'this' keyword refers to the global object
       * when it is used inside the global scope
* 2. implicit binding
        * - this priniciple implies that the 'this' keyword refers to the object where its been used.
        * and it occurs when dot notation is used to invoke a function.
* 3. new binding
        * - Here the 'this' keyword refers to any object created due to the invocation of a constructor function
* 4. explicit binding
        * - Explicit binding of 'this' occurs when .call(), .apply(), or .bind() are used on a function.
        * explicit because you are explicitly passing in a 'this' context to call() or apply().
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