import React, { Component } from 'react';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      text: props.text
    };
  };

  render() {
    return (
      <div className="dpComment">
        <h4 className="dpCommentHeader">{this.props.user || "anonymous"}</h4>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default Comment;