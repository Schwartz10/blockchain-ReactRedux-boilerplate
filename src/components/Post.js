import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import LikePhoto from './LikePhoto';

const cardStyle = {
  width: '30vw'
}

const Post = props => (
  <Card style={cardStyle}>
    <CardHeader
      title={props.username}
    />
    <CardMedia
      overlay={<CardTitle title={'Total InstaCoins: ' + props.tokenPot} />}
    >
      <img src={props.postUrl} alt="" />
    </CardMedia>
    {!props.isPreview &&
      <div>
        <CardTitle title="Like this pic?"/>
        <CardActions>
          <LikePhoto
            postUrl={props.postUrl}
            postAddress={props.address}
          />
        </CardActions>
      </div>
    }
  </Card>
)

export default Post;
