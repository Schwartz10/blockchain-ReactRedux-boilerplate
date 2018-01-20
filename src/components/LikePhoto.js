import React, { Component } from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { likePost } from '../store/posts';

class LikePhoto extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <RaisedButton primary={true} label="like" onClick={e => this.props.like(e, this.props.postUrl, this.props.postAddress, this.props.contract.likePost, this.props.accounts[0])}/>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
    contract: state.contract,
    accounts: state.accounts,
    posts: state.posts
  }
}

const mapDispatch = (dispatch) => {
  return {
    like: function(e, postUrl, postAddress, contractFunc, account){
      e.preventDefault();
      return dispatch(likePost(postUrl, postAddress, contractFunc, account));
    }
  }
}

export default connect(mapState, mapDispatch)(LikePhoto)
