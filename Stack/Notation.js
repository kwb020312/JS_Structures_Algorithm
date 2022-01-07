function digitDivide(num, base) {
	// 10을 넘어가는 진수 변환의 경우
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
