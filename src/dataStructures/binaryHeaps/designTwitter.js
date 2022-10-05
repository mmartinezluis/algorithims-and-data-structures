
var Twitter = function() {
    this.users = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let timeStamp = +new Date();
    let tweet = {};
    tweet.id = tweetId;
    tweet.timeStamp = timeStamp;
    if(this.users.has(userId)){
        this.users.get(userId).tweets.push(tweet);
        this.addToFeed(userId, tweet);
        for(followerId of this.get(userId).followers) {
            this.addToFeed(followerId, tweet);
        }
    } else {
        let data = {};
        data.tweets = [tweet];
        data.followees = [];
        data.followers = [];
        data.newsFeed = [];
        this.users.set(userId, data);
    }
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const tweets = this.users.get(userId).newsFeed;
    let result = [];
    for(let i = tweets.length-1; i >= 0; i--) {
        result.push(tweets[i]);
    }
    return result;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.users.get(followerId).followees.push(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.users.get(followerId).followees.push(followeeId);  
};

Twitter.prototype.addToFeed = function(userId, tweet) {
    const length = this.users.get(userId).newsFeed.length;
    this.users.get(userId).newsFeed.push(tweet);
    if(length > 9) {
        this.users.get(userId).tweets.shift();
    }
}

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */


