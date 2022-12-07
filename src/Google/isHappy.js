/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    const set = new Set();
    let number = n;
    let sum;
    while(number !== 1) {
        number = "" + number;
        sum = 0;
        for(let i = 0; i < number.length; i++){
            sum += parseInt(number[i])**2;
        };
        if(set.has(sum)) return false;
        set.add(sum);
        number = sum;
    }
    return true;
};