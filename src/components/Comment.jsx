import React, { Component } from 'react';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
  return (<li>{this.props.value}</li>);
  }
}

export default Comment;