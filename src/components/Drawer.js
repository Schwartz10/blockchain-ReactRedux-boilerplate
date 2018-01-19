import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

export default class DrawerNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Menu"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/explore"><MenuItem onClick={this.handleClose}>Explore</MenuItem></Link>
          <Link to="/create-post"><MenuItem onClick={this.handleClose}>Create Post</MenuItem></Link>
          <Link to="/profile"><MenuItem onClick={this.handleClose}>My Profile</MenuItem></Link>
          <Link to="/exchange"><MenuItem onClick={this.handleClose}>Buy CapCoins</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}
