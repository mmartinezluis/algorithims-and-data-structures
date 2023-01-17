// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // Implement your solution here
  const inputs = S.split(" ");
  const stack = [];
  const operations = {
    POP: () => {
      stack.pop();
    },
    DUP: () => {
      if (stack.length) {
        stack.push(stack[stack.length - 1]);
      } else {
        // throw error
        throw new Error();
      }
    },
    "+": () => {
      if (stack.length < 2) {
        // throw error
        throw new Error();
      } else {
        const first = stack.pop();
        const second = stack.pop();
        stack.push(first + second);
      }
    },
    "-": () => {
      if (stack.length < 2) {
        // throw error
        throw new Error();
      } else {
        const first = stack.pop();
        const second = stack.pop();
        stack.push(first - second);
      }
    },
  };

  while (inputs.length) {
    const curr = inputs.shift();
    console.log(curr);
    if (operations[curr] === undefined) {
      stack.push(parseInt(curr, 10));
    }
    // } else {
    //   operations[curr]();
    // }
  }

  if (!stack.length) {
    // throw error
    throw new Error();
  }
  console.log(stack);
  return stack[stack.length - 1];
}

let S = "4 5 6 - 7 +";
solution(S);
