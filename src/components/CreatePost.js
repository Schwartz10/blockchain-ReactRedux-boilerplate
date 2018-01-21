import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Post from './Post';
import RaisedButton from 'material-ui/RaisedButton';
import { post } from '../store/posts';

const styles={urlBox: {margin: '.5em'}}

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = { canPost: this.props.user.coinBalance >= 5,
    postUrl: "", caption: "" }
  }

  handleChange = (event) => {
    this.setState({
      postUrl: event.target.value,
    });
  };

  handleCaption = (event) => {
    this.setState({caption: event.target.value})
  }

  render(){
    return(
      <div>
        {this.props.user ?
        <div className="single-page-container">
            <h2>Create Your Post {this.props.user.name}</h2>
            {this.props.user && this.props.user.coinBalance > 0 ?
            <div>
              <TextField
                disabled={this.props.user && this.props.user.coinBalance <= 0}
                errorText={this.props.user && this.props.user.coinBalance <= 0 && "You must buy coins first!"}
                className="action-box"
                style={styles.urlBox}
                value={this.props.postUrl}
                hintText={!this.state.postUrl.length && "Enter Post URL"}
                onChange={this.handleChange}
              /><br />
            </div>
            :
            <h4 className="error-message">You have to buy InstaCoins First!</h4>
            }
            <h4 id="coin-count">You currently have {this.props.user.coinBalance} Coins <br /></h4>
            { this.state.postUrl.length &&
              <div>
                <h3>Post Preview:</h3>
                <TextField
                  value={this.props.postUrl}
                  hintText={!this.state.caption.length && "Enter Caption"}
                  onChange={this.handleCaption}
                /><br />
                <Post
                  username={this.props.user.name}
                  tokenPot={-5}
                  postUrl={this.state.postUrl}
                  caption={this.state.caption}
                  isPreview={true}
                />
                <RaisedButton
                  onClick={e =>
                  this.props.post(e, this.state.postUrl, this.props.contract.createPost, this.props.accounts[0], this.props.user.name, this.state.caption)}
                  label="Create Post" primary={true}
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
    contract: state.contract,
    accounts: state.accounts
  }
}

const mapDispatch = (dispatch) => {
  return {
    post: function(e, postUrl, contractFunc, account, username, caption){
      e.preventDefault();
      console.log(postUrl, contractFunc, account, username, caption)
      return dispatch(post(postUrl, contractFunc, account, username, caption));
    }
  }
}

export default connect(mapState, mapDispatch)(CreatePost)
