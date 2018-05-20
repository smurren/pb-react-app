import React, { Component } from 'react';
import Comments from '../components/Comments';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        uri: this.props.uri
    };
  };

  render() {
    return (
      <div>
          <div className="uriHeader">{this.state.uri}</div>
          <Comments uri={this.state.uri}></Comments>
      </div>
    );
  }
}

export default Main;