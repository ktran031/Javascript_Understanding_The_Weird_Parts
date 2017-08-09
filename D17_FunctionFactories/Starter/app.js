function makeGreeting(language) {

	return function(firstname, lastname) {

		if (language === 'en') {
			console.log('Hello ' + firstname + ' ' + lastname);
		}

		if (language === 'es') {
			console.log('Hola ' + firstname + ' ' + lastname);
		}

	}

}

var greetEng = makeGreeting('en');
var greetSpan = makeGreeting('es');

greetEng('Khoi', 'Tran');
greetSpan('Khoi', 'Tran');
