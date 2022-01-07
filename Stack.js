function digitDivide(num, base) {
	const nums = '0123456789ABCDEF';
	let result = '';
	const stackBox = [];
	while (num) {
		stackBox.push(num % base);
		num = Math.floor(num / base);
	}

	while (stackBox.length) {
		result += nums[stackBox.pop()];
	}

	return result;
}
