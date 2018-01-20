import React, {Component} from 'react'
import Post from './Post'
import {connect} from 'react-redux'
import { fetchPosts } from '../store/posts'

class Explore extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.contract.getPosts && this.props.posts.length === 0) {
      this.props.getPosts(this.props.contract.getPosts,
        this.props.contract.addressToPost);
    }
  }

  render(){
    return(
      <div>
          <h1 className="single-view-header">Explore</h1>
          {this.props.posts.length > 0 &&
            this.props.posts.map(post =>
              <div id="post-container" key={post.username}>
                  <Post
                    username={post.username}
                    tokenPot={post.tokenPot}
                    postUrl={post.postUrl}
                    address={post.address}
                    isPreview={false}
                  />
              </div>
          )}
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
    getPosts: function(contractFunc, addressToPost){
      return dispatch(fetchPosts(contractFunc, addressToPost));
    }
  }
}

export default connect(mapState, mapDispatch)(Explore)
