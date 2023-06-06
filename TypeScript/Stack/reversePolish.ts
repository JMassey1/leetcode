// 150. Evaluate Reverse Polish Notation
function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    tokens.forEach((token: string) => {
        if (Number.isInteger(Number(token))) {
            stack.push(Number(token));
        } else {
            const n2 = stack.pop();
            const n1 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(n1 + n2)
                    break;
                case '-':
                    stack.push(n1 - n2);
                    break;
                case '/':
                    stack.push(Math.trunc(n1 / n2));
                    break;
                case '*':
                    stack.push(n1 * n2)
                    break;
                default:
                    break;
            }
        }
    })

    return stack.pop();
}