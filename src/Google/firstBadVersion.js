/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let i = 1;
        let j = n;
        let prevApi =null
        let prevNumber =1;
        let current = 1;
        while(i < j) {
            current = Math.floor((j+i)/2);
            const api = isBadVersion(current);
            if(api && prevApi !== null && !prevApi) return prevNumber + 1;
            if(api) {
                j = current -1;
            } else {
                prevNumber = current;
                i = current + 1;
            }
            prevApi = api;
        }
        return prevNumber;
    };
};