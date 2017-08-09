// Polyfil
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

// var person = {
// 	firstname: 'Default',
// 	lastname: 'Default',
// 	greet: function () {
// 		return 'Hi ' + this.firstname;
// 	}
// }

// var khoi = Object.create(person);
// khoi.firstname = "Khoi";
// khoi.lastname = "Tran";
// console.log(khoi.greet());

// ES6 using class
class Person {

	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet() {
		return "Hi " + this.firstname;
	}

}

var khoi = new Person('Khoi', 'Tran');
console.log(khoi.greet());