module.exports = function check(str, bracketsConfig) {
	let objBracketsPair = {};

	/*create object of brackets, that wil need for check if our bracket is closing for opening bracket*/
	bracketsConfig.forEach(el => {
		objBracketsPair[el[1]] = el[0];
	});

	let arrOpenBrackets = [];

	/*create array of opening brackets*/
	bracketsConfig.forEach(el => {
		arrOpenBrackets.push(el[0]);
	});

	let arrClosingBrackets = [];

	/*create array of closing brackets*/
	bracketsConfig.forEach(el => {
		arrClosingBrackets.push(el[1]);
	});

	let resulrArr = [];

	for (let i = 0; i < str.length; i++) {

		let curSymbol = str[i];

		/*if array of opening brackets includes current symbol*/
		if (arrOpenBrackets.includes(curSymbol)) {
			/*if array of closing brackets includes current symbol*/
			if (arrClosingBrackets.includes(curSymbol)) {
				let lastSymbolInResultArr = resulrArr[resulrArr.length - 1];
				if ((resulrArr.length === 0) || (lastSymbolInResultArr !== curSymbol)) {
					resulrArr.push(curSymbol);
				}
				if ((resulrArr.length !== 0) && (lastSymbolInResultArr === curSymbol)) {
					resulrArr.pop();
				}
			}
			/*if array of closing brackets doesn't include current symbol*/
			else {
				resulrArr.push(curSymbol);
			}
			
		}
		/*if array of opening brackets doesn't include current symbol*/
		else {
			if (resulrArr.length === 0) {
				return false;
			}
			let lastSymbolInResultArr = resulrArr[resulrArr.length - 1];
			if (objBracketsPair[curSymbol] === lastSymbolInResultArr) {
				resulrArr.pop();
			}
			else {
				return false;
			}
		}
	}
	if (resulrArr.length === 0) {
		return true;
	}
	else {
		return false;
	}
}