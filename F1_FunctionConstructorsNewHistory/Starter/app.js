function Person(firstname, lastname) {

	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	console.log('this function is invoked');

}

var khoi = new Person('Khoi', 'Tran');
console.log(khoi);
var dice = new Person('Dice', 'Nguyen');
console.log(dice);