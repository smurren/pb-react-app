import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import TextField from 'material-ui/TextField/TextField';
import Comment from '../components/Comment';
// import FaBeer from 'react-icons/lib/fa/beer';


function CommentsList(props) {
  const comments = props.comments;
  const listItems = comments.map((comment) =>
    <Comment key={comment.id}
              user={comment.user}
              text={comment.text} />
  );
  return (
    <div>
      {listItems}
    </div>
  );
}

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
        uri: props.uri,
        commentsStatusMessage: "Loading...",
        user: "",
        input: "",
        comments: [],
        commentsMessageClass: "dpCommentsStatus"
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
          {id: 1, user: "anonymous", "text": "This is an example comment!"},
          {id: 2, user: "anonymous", "text": "This is another example comment!"},
          {id: 3, user: "Sean", "text": "And again an example comment!"}
        ]})
        
        this.setState({commentsStatusMessage: this.state.comments.length === 0 ? "No comments" : ""});
        this.setState({commentsMessageClass: this.state.comments.length === 0 ? "dpCommentsStatus" : "noDisplay"})

       }.bind(this), 1500)
  }

  handleUserEdit = (e) => { this.setState({user: e.target.value}); }

  handleCommentEdit = (e) => { this.setState({input: e.target.value}); }

  handleSubmit = (e) => {
    const user = this.state.user;
    const comment = this.state.input;
    const newId = this.state.comments.slice(-1)[0].id+1;
    const newComments = this.state.comments.slice();

    newComments.push({id: newId, user: user, text: comment});
    this.setState({comments: newComments});
    this.setState({input: ""});
  }

  render() {
    return (
      <div>
        <Paper className="dpCommentsSectionContainer">
          <div className="dpCommentInputContainer">
            <TextField
              id="dpUserInput"
              placeholder="Name"
              className="dpCommentUserInput"
              onChange={this.handleUserEdit}
            />
            <TextField
              id="dpCommentInput"
              multiLine={true}
              placeholder="Comment..."
              className="dpCommentInput"
              margin="normal"
              rows={4}
              fullWidth={true}
              value={this.state.input} 
              onChange={this.handleCommentEdit}
            />
            <div className="dpInputOptionContainer">
              <RaisedButton primary className="dpInputOption" onClick={this.handleSubmit}>
                Submit
              </RaisedButton>
            </div>
          </div>
        </Paper>

        <Paper className="dpCommentsSectionContainer dpCommentsContainer">
          <div className={this.state.commentsMessageClass}>{this.state.commentsStatusMessage}</div>
          <div className="dpCommentListContainer">
            <CommentsList comments={this.state.comments}></CommentsList>
          </div>
            {/* <h3> Lets go for a <FaBeer />? </h3> */}
        </Paper>
      </div>
    );
  }
}

export default Comments;