import React, { Component } from 'react';
import './App.css';

class TweetBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : '',
      limitChars: 150,
    }
  }

  handerInput(text){
    this.setState({
      text: text,
      limitChars : 150 - text.length,
    });
  }

  render() {
    return (
      <div className="TweetBoxWrap">
        <textarea className="textInput"
        placeholder={this.props.prompt}
        onChange={ e => this.handerInput(e.target.value) }
        />
        <div className="btnWrap">
          <button className="btnTweet" onClick={ ()=> this.props.onTweet(this.state.text) }>
            Tweet
          </button>
          <p className="limitChars">Characters left: {this.state.limitChars}</p>
        </div>
      </div>
    );
  }
}

export default TweetBox;