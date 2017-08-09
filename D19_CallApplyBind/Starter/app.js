var person = {
	firstname: 'Khoi',
	lastname: 'Tran',
	getFullName: function () {

		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;

	}
}

var logName = function(lang1,lang2) {

	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + lang2);
	console.log('--------------------');

}//.bind(person);
// logName();

// Using bind()
var logPersonName = logName.bind(person);
logPersonName('english ', 'spanish');

// Using call()
logName.call(person, 'english ', 'spanish');

//Using apply()...uses an array instead
logName.apply(person, ['english ', 'spanish']);


// Function Borrowing
var person2 = {
	firstname: 'Jane',
	lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// Function Currying
function multiply(a, b) {
	return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));