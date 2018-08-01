import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { videos } from './videos';


export default class Player extends Component {
    constructor(props){
        super(props);
        this.showControls = true;

        // I am on an iPhone
        // So turn on video controls
        if (navigator.userAgent.indexOf('iPhone') != -1 ||
            navigator.userAgent.indexOf('Android') != -1) {
            this.showControls = true;
        }
    };

    render (){
        return(
            <div className="player-container">
            <ReactPlayer controls={this.showControls} width="100%" height="100%"
                url="https://youtu.be/0EiH0U8Bt0Y"
            />
        </div>
    );
  }
}
