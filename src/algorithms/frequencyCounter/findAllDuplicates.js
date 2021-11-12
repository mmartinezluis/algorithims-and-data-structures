function findAllDuplicates(arr){
    let map = new Map();
    for(const integer of arr) {
        if(map.has(integer)) map.set(integer, map.get(integer)+1);
        else map.set(integer, 1);
    }  
    let result = [];
    for( const [integer, count] of map){
        if(count > 1) result.push(integer);
    }
    return result;
}