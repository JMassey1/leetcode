function isValid(s: string): boolean {
    const validPairs: Record<string, string> = {
        '{': '}',
        '[': ']',
        '(': ')',
    }

    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (Object.keys(validPairs).includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const stack_val = stack.pop();
            if (validPairs[stack_val] === s[i]) {
                continue;
            } else {
                return false;
            }
        }

    }

    return stack.length === 0;
};