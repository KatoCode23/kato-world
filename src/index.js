import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Button from './Button';
import Player from './Player';
import Footer from './Footer';
import Clock from './Clock';
import { images } from './images';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.clickOpen = this.clickOpen.bind(this);
    this.state = {
      currentPic: null
    }
    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
    this.clickClose = this.clickClose.bind(this);
  };


  clickOpen(event){
      this.setState({
        currentPic: Number(event.target.id)
      })
      console.log('You have clicked:' + event.target.id);
  }

  clickNext(){
    this.setState({
      currentPic: this.state.currentPic + 1
    })
    console.log(this.state.currentPic);
  }

  clickPrevious(){
    this.setState({
      currentPic: this.state.currentPic -1
    })
  }

  clickClose(){
    this.setState({
      currentPic: null
    })
    console.log('You have clicked closed...');
  }


    render () {
        const homeImage = require('./pics/2.jpg');
        const listOfImages = images.map((item, index) => {
            const requiredPic = require(`./pics/${item.name}.jpg`);
            if(item.wide === true){
                return <li id={index} className="wide-image-container" onClick={this.clickOpen}
                    key={item.toString()}
                    style={{ backgroundImage: "url(" + requiredPic + ")" }}>
                </li>
            }
            else if(this.state.currentPic === null){
                return <li id={index} className="image-container" onClick={this.clickOpen}
                    key={item.toString()}
                    style={{ backgroundImage: "url(" + requiredPic + ")" }}>
                </li>
            }else{
                return <li id={index} className="image-container" onClick={this.clickOpen}
                    key={item.toString()}
                    style={{ backgroundImage: "url(" + requiredPic + ")" }}>
                </li>
            }

        });

        let nextbutton = null;
        if(this.state.currentPic < images.length -1){
            nextbutton = <span className="arrow next" onClick={this.clickNext}>
            <i className="fa fa-caret-square-o-right" aria-hidden="true"></i></span>
        }

        let prevbutton = null;
        if(this.state.currentPic > 0){
            prevbutton = <span className="arrow prev" onClick={this.clickPrevious}>
            <i className="fa fa-caret-square-o-left" aria-hidden="true"></i></span>
        }

        let closebutton = null;
        if(this.state.currentPic < images.length || this.state.currentPic > 0){
            closebutton = <span className="close" onClick={this.clickClose}>
            <i className="fa fa-window-close-o" aria-hidden="true"></i></span>
        }

        let fullimage = null;
        if(this.state.currentPic != null){
            const currentImage = images[this.state.currentPic];
            fullimage = (<div className="full-image"
                style={{ backgroundImage: "url(" + require(`./pics/${currentImage.name}.jpg`) + ")" }}>
                {nextbutton}
                {prevbutton}
                {closebutton}
            </div>)
        }

        return (
            <div className="main-content">
                <div className="homeImage"
                     style={{ backgroundImage: "url(" + homeImage + ")" }}>
                     <span className="title">Kato World</span>
                </div>
                <Button />
                <Player />
                <Clock />
                {listOfImages}
                {fullimage}
                <Footer />
            </div>
        );
     }
  }

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);
