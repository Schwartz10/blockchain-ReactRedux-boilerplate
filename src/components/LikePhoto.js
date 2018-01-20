import React, { Component } from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { likePost } from '../store/posts';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import TextField from 'material-ui/TextField';

const styles = {
  button: {
    margin: '.25em',
  },
  textField: {
    width: '2em',
    height: '2em',
    margin: '0, 0, 0, .25em'
  }
};

class LikePhoto extends Component {
  constructor(props){
    super(props);
    this.state = {reward: 0}
  }

  incrementReward = (e) => {
    e.preventDefault();
    let reward = Number(this.state.reward + 1)
    this.setState({ reward })
  }

  decrementReward = (e) => {
    e.preventDefault();
    let reward = Number(this.state.reward - 1)
    this.setState({ reward })
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({reward: event.target.value})
  }

  render(){
    return(
      <div id="action-bar">
        <div id="action-options">
          <TextField
            style={styles.textField}
            hintText="0"
            value={this.state.reward}
            onChange={this.handleChange}
          />
          <FloatingActionButton
            onClick={this.incrementReward} mini={true}
            style={styles.button} >
             <ContentAdd />
          </FloatingActionButton>
          <FloatingActionButton
            onClick={this.decrementReward} mini={true}
            disabled={this.state.reward <= 0}
            style={styles.button}>
              <ContentRemove />
          </FloatingActionButton>
        </div>
        <RaisedButton primary={true} disabled={this.state.reward <= 0} label="Reward" onClick={e => this.props.like(e, this.props.postUrl, this.props.postAddress, this.props.contract.likePost, this.props.accounts[0], this.state.reward)}/>
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
    like: function(e, postUrl, postAddress, contractFunc, account, reward){
      e.preventDefault();
      return dispatch(likePost(postUrl, postAddress, contractFunc, account, reward));
    }
  }
}

export default connect(mapState, mapDispatch)(LikePhoto)
