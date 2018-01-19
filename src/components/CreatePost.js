import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Post from './Post';

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = { canPost: this.props.user.coinBalance >= 5,
    postUrl: "" }
  }

  handleChange = (event) => {
    this.setState({
      postUrl: event.target.value,
    });
  };

  render(){
    return(
      <div>
        {this.props.user ?
        <div>
          <h1>Create Your Post {this.props.user.name}</h1>
          <h3>You currently have {this.props.user.coinBalance} Tokens <br /></h3>
          <TextField
            value={this.props.postUrl}
            hintText={!this.state.postUrl.length && "Enter Post URL"}
            onChange={this.handleChange}
          /><br />
          { this.state.postUrl.length &&
            <div>
              <h3>Post Preview:</h3>
              <Post
                username={this.props.user.name}
                tokenPot={5}
                postUrl={this.state.postUrl}
                isPreview={true}
              />
            </div>
          }
        </div>
        :
        <div>
          <h1>Create your account first!</h1>
          <Link to='/profile'>Create Accout</Link>
        </div>
    }
  </div> )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
    contract: state.contract
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(CreatePost)
