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

	if (count !== t.length) {
		return false;
	}
	return true;
};