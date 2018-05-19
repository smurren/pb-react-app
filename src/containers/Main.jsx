import React, { Component } from 'react';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function CommentsList(props) {
  const comments = props.comments;
  const listItems = comments.map((comment) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={comment.id}
              value={comment.text} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        input: "",
        comments: [{id: 1, "text": "This is an example comment!"}]
    };
  };

  handleCommentEdit = (e) => {
    // const id = 1;
    // const text = e.target.value;
    this.setState({input: e.target.value});
    // this.setState({comments: this.state.comments.map(
    //     (el)=> el.id === id ? Object.assign({}, el, {text: text}) : el 
    // )});
  }

  handleSubmit = (e) => {
    const comment = this.state.input;
    const newId = this.state.comments.slice(-1)[0].id+1;
    const newComments = this.state.comments.slice();
    newComments.push({id: newId, text: comment});
    this.setState({comments: newComments});
    this.setState({input: ""});
  }

  render() {
    return (
      <div>
          <h2>{this.props.uri}</h2>
          <CommentsList comments={this.state.comments}></CommentsList>
          <textarea value={this.state.input} onChange={this.handleCommentEdit}></textarea>
          <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Main;