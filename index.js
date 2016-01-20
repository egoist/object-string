module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expect a string but got ' + typeof str)
	}
	// check if str is a valid array-string
	if (str.indexOf(',') > -1) {
		var arr = str.split(',')
		var treatAsObject = arr[0].indexOf(':') > -1
		if (treatAsObject) {
			var result = {}
			arr.forEach(function (item) {
				var yields = item.split(':')
				result[yields[0]] = yields[1]
			})
			return result
		}
		return str.split(',')
	}
	// check if str is a valid object-string
	if (str.indexOf(':') > -1) {
		var yields = str.split(':')
		return {[yields[0]]: yields[1]}
	}
	return str
}
