function sortedFrequency(arr, integer){
    let i = 0;
    let j = arr.length -1;
    let result =0;
    if(arr[0] === integer && arr[j] === integer) return arr.length;
    if(arr[0] > integer || arr[j] < integer) return -1;
    let middle = Math.floor((i+j)/2);
    while(arr[middle] !== integer) {
        if(arr[middle] > integer) {
            j = middle - 1;
        } else i = middle + 1;
        middle = Math.floor((j+i)/2);
    }
    result = leftHelper(arr.slice(0, middle), integer) + rightHelper(arr.slice(middle),integer);
    return result === 0 ? -1 : result;
    
    function leftHelper(array, integer){
        let k = 0;
        let m = array.length -1;
        if(array[0] === integer) return array.length;
        if(array[m] !== integer) return 0;
        while( k !== m){
            let middle = Math.floor((k+m)/2);
            if(array[middle] === integer){
                m = middle;
            } else k = middle + 1;
        }
        return array.length - m;
    }

    function rightHelper(array, integer){
        let k = 0;
        let m = array.length -1;
        if(array[0] !== integer) return 0;
        if(array [0] === integer && array[m] === integer) return array.length;
        while( k !== m){
            let middle = Math.floor((k+m)/2);
            if(array[middle] === integer && array[middle+1] === integer){
                k = middle+1 ;
            } else m = middle  ;
        }
        return m+1;
    }
    
  }