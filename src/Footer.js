import React from 'react';




export default class Footer extends React.Component {
render(){
  return(
    <div className="footer">
      <a href="https://www.facebook.com/" target="blank"><span className="social-media"><i className="fab fa-facebook-f" aria-hidden="true"></i></span></a>
      <a href="https://www.instagram.com/" target="blank"><span className="social-media"><i className="fab fa-instagram" aria-hidden="true"></i></span></a>
      <span className="signature">Designed by Kato</span>
      
    </div> 
  );
  }
} 