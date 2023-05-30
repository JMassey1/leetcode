function longestConsecutive(nums: number[]): number {
    const numSet: Set<number> = new Set(nums);
    let longestRun: number = 0;

    for (const num of nums) {
        let count: number = 1;
        let tempNum: number = num;

        while (numSet.has(++tempNum) && !numSet.has(num - 1)) {
            count++;
        }

        if (count > longestRun) {
            longestRun = count;
        }
    }

    return longestRun;
};