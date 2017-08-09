function greet(whattosay) {

	return function(name) {

		return function(ending) {
			console.log(whattosay + ' ' + name + ', ' + ending);
		}

	}

}
var sayHi = greet('Hi');
sayHi('khoi')('How are you?');

