import React, { Component } from 'react';
class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div className="TweetWrap">
                <div className="TweetContent">
                    {tweet.text}
                </div>
                <button className="btnTweet" href='#' onClick={() => this.props.handleLike(tweet)}>{tweet.liked ? 'Unlike' : 'Like'}</button>
            </div>
        )
    }
}
export default Tweet;