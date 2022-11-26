/**
 * @param {string[]} timePoints
 * @return {number}
 */

 const MAX_TIME = 1440; 
 
 var findMinDifference = function(timePoints) {
   let records = new Set();
   for(let point of timePoints) {
     if(records.has(point)) return 0;
     records.add(point);
   }

};

function minutes(string1, string2) {
    let time1 = ((parseInt(string1[0] + string1[1]))*60 + parseInt(string1[4] + string1[5])) || MAX_TIME;
    let time2 = ((parseInt(string2[0] + string2[1]))*60 + parseInt(string2[4] + string2[5])) || MAX_TIME;
    let minutes = time1 > time2 ? time1 - time2 : time2 - time1;
    return minutes;
}