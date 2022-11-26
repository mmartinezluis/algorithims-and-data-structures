/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    if(tokens.length < 2) return parseInt(tokens[0]);
    let stack = [];
    let results;
    for(let element of tokens) {
        if(operations[element] === undefined) {
            stack.push(parseInt(element));
        } else {
            if(results === undefined) {
                results = stack.pop();
            }
            results = operations[element](stack.pop(), results);
            results = !Number.isInteger(results) && results  < 0 && results > -1 ? 0 : Math.floor(results);
        }
    }
    console.log(results)
    return results;
};

const operations = {
    "+": (op1, op2) => op1 + op2,
    "-": (op1, op2) => op1 - op2,
    "*": (op1, op2) => op1*op2,
    "/": (op1, op2) => op1/op2
}

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
tokens = ["3","11","+","5","-"]
tokens = ["12", "7", "-"];
evalRPN(tokens)