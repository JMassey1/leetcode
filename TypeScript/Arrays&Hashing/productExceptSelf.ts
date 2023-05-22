// 238. Product of Array Except Self
function productExceptSelf(nums: number[]): number[] {
	const returnArr: Array<number> = [];

	let accProduct: number = 1;

	// Set initial values to prefix product
	for (let i = 0; i < nums.length; i++) {
		returnArr[i] = accProduct;
		accProduct *= nums[i];
	}

	// Reset accumulating product
	accProduct = 1;

	// Multiply by Suffix product
	for (let i = nums.length - 1; i >= 0; i--) {
		returnArr[i] *= accProduct;
		accProduct *= nums[i];
	}

	return returnArr;
}