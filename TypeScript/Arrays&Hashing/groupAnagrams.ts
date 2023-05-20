function groupAnagrams(strs: string[]): string[][] {
	const returnArr: string[][] = [];

	const checkedHash: Map<string, string[]> = new Map<string, string[]>();
	const sortedSet: Set<string> = new Set();

	strs.forEach((word: string) => {
		const sortedWord = word.split('').sort().join('');
		if (checkedHash.has(sortedWord)) {
			const anaList: string[] = checkedHash.get(sortedWord);
			checkedHash.delete(sortedWord);
			checkedHash.set(sortedWord, [...anaList, word]);
		} else {
			checkedHash.set(sortedWord, [word,]);
		}
		sortedSet.add(sortedWord);
	})

	Array.from(sortedSet).forEach((key: string) => {
		returnArr.push(checkedHash.get(key));
	})

	return returnArr;

};