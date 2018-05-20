import React, { Component } from 'react';
import Comment from '../components/Comment';
// import FaBeer from 'react-icons/lib/fa/beer';


function CommentsList(props) {
  const comments = props.comments;
  const listItems = comments.map((comment) =>
    <Comment key={comment.id}
              value={comment.text} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
        uri: this.props.uri,
        input: "",
        comments: []
    };
  };

  componentDidMount() {
      this.fetchComments();
  }

  fetchComments() {
    // fetch("https://api.example.com/items")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           items: result.items
    //         });
    //       },
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )
      setTimeout(function(){ 
        this.setState({comments: [
          {id: 1, "text": "This is an example comment!"},
          {id: 2, "text": "This is another example comment!"},
          {id: 3, "text": "And again an example comment!"}
        ]})
       }.bind(this), 1500)
  }

  handleCommentEdit = (e) => {
    this.setState({input: e.target.value});
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
      <div className="">
        <div className="dpCommentInputContainer">
          <div>
            <textarea className="dpCommentInput" value={this.state.input} onChange={this.handleCommentEdit}></textarea>
          </div>
          <div className="dpInputOptionContainer">
            <button className="dpInputOption" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="dpCommentsContainer centerHor">
          <CommentsList comments={this.state.comments}></CommentsList>
        </div>
          {/* <h3> Lets go for a <FaBeer />? </h3> */}
      </div>
    );
  }
}

export default Comments;