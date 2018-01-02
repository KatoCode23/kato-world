import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Button from './Button';
import Player from './Player';
import Footer from './Footer';

var images = [
"./1.jpg",
"./2.jpg",
"./3.jpg",
"./4.jpg",
"./5.jpg",
"./6.jpg",
"./7.jpg",
"./8.jpg",
"./9.jpg",
"./10.jpg",
"./11.jpg",
"./12.jpg",
"./13.jpg",
"./14.jpg",
"./15.jpg",
"./16.jpg",
"./17.jpg",
"./18.jpg",
"./19.jpg",
"./20.jpg",
"./21.jpg",
"./22.jpg",
"./23.jpg",
"./24.jpg",
"./25.jpg",
"./26.jpg",
"./27.jpg",
"./28.jpg",
"./29.jpg"
];

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
    const listOfImages = images.map((item, index) => {
    const requiredPic = require(`${item}`);
      if(this.state.currentPic === null){
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
                  const current = require(`${images[this.state.currentPic]}`);
                  fullimage =
                  <div className="full-image"
                      style={{ backgroundImage: "url(" + current + ")" }}>
                      {nextbutton}
                      {prevbutton}
                      {closebutton}
                  </div>
                }
                const homeImage = require('./world.jpg');
      return (
        <div className="main-content">
            <div className="homeImage"
            style={{ backgroundImage: "url(" + homeImage + ")" }}>
            <span className="title">Kato World</span>
            </div>
            <Button />
            <Player />
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

//const numbers = [1,2,3,4,5];
//const doubled = numbers.map((number) => number * 2);
//console.log(doubled);
//const background = require('./world.jpg');
