
function flatten(arr){
    if (!Array.isArray(arr)) return undefined;
    let result = [];
    function helper(arr){
        arr.forEach(element => {
            if(Array.isArray(element)) {
                helper(element)
            } else {
                result.push(element)
            }
        })
    }
    helper(arr);
    return result;
}