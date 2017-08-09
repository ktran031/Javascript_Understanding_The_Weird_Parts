// If its a function constructor, we ALWAYS use a capital letter in the beginning
function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastname;
}

Person.prototype.getFormalName = function() {
	return this.lastname + ', ' + this.firstname;
}

var john = new Person('John', 'Doe');
console.log(john.getFullName());
console.log(john.getFormalName());

var jane = new Person('Jane', 'Doe');
console.log(jane.getFullName());
console.log(jane.getFormalName());