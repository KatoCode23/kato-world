import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export default class Player extends Component {
constructor(props){
  super(props);
  this.state = {
    playing: true
  }
  this.playPause = this.playPause.bind(this);
};

playPause = () => {
  this.setState({
    playing: !this.state.playing
  })
}

onPlay = () => {
  console.log('onPlay')
  this.setState({
    playing: true
  })
}
onPause = () => {
  console.log('onPause')
  this.setState({
    playing: false
  })
}

  render () {
  return(
    <div className="player-container">
       <ReactPlayer width="100%" height="100%" url='https://youtu.be/0EiH0U8Bt0Y'
              onPlay={this.onPlay}
              onPause={this.onPause}
              playing={this.playing}
              />
    </div>


);
  }
}
