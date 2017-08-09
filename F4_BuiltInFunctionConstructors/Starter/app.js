String.prototype.isLengthGreaterThan = function(limit) {
	return this.length > limit;
}
console.log('Khoi'.isLengthGreaterThan(3));