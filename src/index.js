module.exports = function check(str, bracketsConfig) {
	// your solution
	let stack = [],
		configObj = Object.fromEntries(bracketsConfig.map((arr) => arr.reverse()));

	for (let i = 0; i < str.length; i++) {
		const bracket = str[i];
		// проверяем, является ли скобка закрывающей и есть ли в стеке соответствующая ей открывающая
		if (Object.keys(configObj).includes(bracket) && stack[stack.length - 1] === configObj[bracket]) {
			stack.pop();
		} else {
			stack.push(bracket);
		}
	}
	return stack.length === 0;
};
