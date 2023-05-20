// 242. Valid Anagram
function isAnagram(s: string, t: string): boolean {

	const t_chars = Array.from(t);
	let count = 0;

	Array.from(s).forEach((character: string) => {
		if (!t_chars.includes(character)) {
			return false;
		} else {
			count++;
		}
	})

	return count === t.length;

}