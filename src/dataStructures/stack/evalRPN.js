/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {)
    let stack = [];
    let results;
    for(let element of tokens) {
        if(operations[element] === undefined) {
            stack.push(element);
        } else {
            if(results === undefined) {
                results = parseInt(stack.pop());
            }
            // results = stack.pop() + symbols[element] + results;
            results = Math.ceil(operations[element](parseInt(stack.pop()), results));
        }
    }
    console.log(results)
};

const operations = {
    "+": (op1, op2) => op1 + op2,
    "-": (op1, op2) => op1 - op2,
    "*": (op1, op2) => op1*op2,
    "/": (op1, op2) => op1/op2
}

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

evalRPN(tokens)