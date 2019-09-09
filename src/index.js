import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Button from './Button';
import Player from './Player';
import Footer from './Footer';
import Clock from './Clock';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    }
  };

    render () {
        const homeImage = require('./pics/2.jpg');

        return (
            <div className="main-content">
                <div className="homeImage"
                     style={{ backgroundImage: "url(" + homeImage + ")" }}>
                </div>
                <Button />
                <Player />
                <Clock />
                <Footer />
            </div>
        );
     }
  }

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);
