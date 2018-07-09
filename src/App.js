import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './TweetBox.js';
import Tweet from './Tweet.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets:[
        {text:'Hello World!', liked: false},
        {text:'Coder school is the best!', liked: false},
      ]
    }
  }

  handleTweet(tweet) {
    this.setState({
      tweets:this.state.tweets.concat({text: tweet, liked: false})
    });
  }

  handleLike(tweet){
    let tweets = this.state.tweets.map( (t) => {
      if (t.text == tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        } 
      }
      return t;
    });

    this.setState({
      tweets
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="appWrap">
          <TweetBox prompt="What's your status?" onTweet={this.handleTweet.bind(this)}/>
          { this.state.tweets.map( tweet => 
            <Tweet tweet={tweet}
            handleLike={this.handleLike.bind(this)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;