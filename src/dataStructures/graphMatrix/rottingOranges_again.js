/**
 * @param {number[][]} grid
 * @return {number}
 */
// Strategy: iterate through the grid, and push the coordinate pairs
// of the rotted oranges into a queue and count the number of fresh
// oranges. Introduce a token to the end of the queue which will
// signal that the first batch of rotted oranges was processed.
// Run a while loop on the queue, and process each rotted orange 
// at a time, inspecting the four adjacent cells and marking fresh oranges as
// rotten (and decrease the variable for fresh oranges count) and pushing
// the new rotten oranges to queue.
// When the introduced token appears for processing, increase the minutes by one
// , and if the queue is not empty, push another token to queue.
// When while loop is done, if fresh oranges count is > 0, return -1;
// otherwise return the number of minutes.
 var orangesRotting = function(grid) {



 }