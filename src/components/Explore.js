import React, {Component} from 'react'
import Post from './Post'
import {connect} from 'react-redux'
import { fetchPosts } from '../store/posts'

class Explore extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    // if (Object.keys(nextProps.contract).length && nextProps.accounts.length) {
    //   this.props.getPosts(this.props.contract.getPosts);
    // }
  }

  render(){
    return(
      <div>
        <h1>Explore</h1>
      </div>
    )
  }
}

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
    getPosts: function(contractFunc){
      return dispatch(fetchPosts(contractFunc));
    }
  }
}

export default connect(mapState, mapDispatch)(Explore)
