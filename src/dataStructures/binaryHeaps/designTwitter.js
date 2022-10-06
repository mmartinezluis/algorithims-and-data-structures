
var Twitter = function() {
    this.users = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let tweet = {};
    tweet.id = tweetId;
    tweet.timeStamp = +new Date();
    tweet.user = userId;
    if(this.users.has(userId)){
        this.users.get(userId).tweets.push(tweet);
        this.addToFeed(userId, tweet);
    } else {
        // create user if not existing
        this.createUser(userId, tweet)
    }
    // Rare, but user may already be followed without being created
    for(followerId of this.get(userId).followers) {
        this.addToFeed(followerId, tweet);
    }
};

Twitter.prototype.createUser = function (userId, tweet=null) {
    let data = {}
    data.tweets = tweet ? [tweet] : [];
    data.followees = [];
    data.followers = [];
    data.newsFeed = tweet ? new MinBinaryHeap([tweet]) : new MinBinaryHeap();
    this.users.set(userId, data);
}

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    return this.users.get(userId).newsFeed.values
        .slice()
        .sort((a,b) => b.timeStamp - a.timeStamp)
        .map(({id}) => {
            return id;
        });
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.users.get(followerId).followees.push(followeeId);
    // Handle the follwee tweets
    let userFeed = this.users.get(followerId).newsFeed;
    let followeeUser
    if(this.users.has(followeeId)) {

    }

    if(followeeTweets && followeeTweets.tweets.length > 0) {
        followeeTweets = followeeTweets.tweets;
        const user_min_tweet = userFeed.values[0];
        const last_tweet = followeeTweets[followeeTweets.length -1];
        if(userFeed.length < 10 || (last_tweet.timeStamp > user_min_tweet.timeStamp)) {
            for(let i=followeeTweets.length-1; (i >= followeeTweets.length - 1 - 10) && i >= 0; i--) {
                this.addToFeed(followerId, followeeTweets[i])
            }
        }
    }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    const updatedFollowees = this.users.get(followerId).followees.filter(id => id !== followeeId);
    const feed = this.users.get(followerId).newsFeed;
    feed.values = feed.values.filter(({user}) => user !== followeeId);
    this.users.set(followerId, 
        {...this.users.get(followerId), 
            followees: updatedFollowees, 
            newsFeed: feed
        }
    )
};

Twitter.prototype.addToFeed = function(userId, tweet) {
    const feed = this.users.get(userId).newsFeed;
    feed.add(tweet);
    if(feed.values.length > 10) {
        feed.extractMin();
    }
    this.users.set(userId, {...this.users.get(userId), newsFeed: feed});
}

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

class MinBinaryHeap {
    constructor(values){
        this.values = values || [];
    }

    add(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length-1;
        while(index > 0) {
            const node = this.values[index].timeStamp;
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex].timeStamp;
            if(parent < node) break;
            swap(this.values, parentIndex, index);
            index = parentIndex;
        }
    }
    extractMin() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }
    bubbleDown() {
        let index = 0;
        while(index < this.values.length -1) {
            let swapIndex = null;
            const node = this.values[index].timeStamp;
            let childIndex = 2*index + 1;
            let child1 = this.values[childIndex];
            let child2 = this.values[childIndex +1];
            if(child1 && node > child1.timeStamp) swapIndex = childIndex;
            if(child2 && node > child2.timeStamp && child2.timeStamp < child1.timeStamp) swapIndex = childIndex +1;
            if(swapIndex === null) break;
            swap(this.values, swapIndex, index);
            index = swapIndex;
        }
    }
}

function swap(arr, index1, index2) {
    [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
}

