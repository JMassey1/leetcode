// 347. Top K Frequent Elements
function topKFrequent(nums: number[], k: number): number[] {
	const frequencyMap: Map<number, number> = new Map();

	nums.forEach((num: number) => {
		frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
	})

	const sortedNums = Array.from(frequencyMap.entries()).sort((a, b) => b[1]-a[1]);

	const mostFrequent: number[] = [];
	for (let i = 0; i < k && i < sortedNums.length; i++) {
		mostFrequent.push(sortedNums[i][0]);
	}

	return mostFrequent;
}