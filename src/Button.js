import React from 'react';

 export default class Button extends React.Component {

  constructor(props){
    super(props);
    this.openBio = this.openBio.bind(this);
    this.state = {
      bio: false
    }
  };


  openBio(event){
    event.preventDefault();
    this.setState({
      bio: !this.state.bio
    })
    console.log('Yo i Work.....' + this.state.bio);
  }

  render(){

    let bio = null;
    if(this.state.bio === true){
      bio = <p>Kato! A man of vision. Long Beach, California born. New York City Living.<br/>
      Doer since the beginning. Only thoughts of winning.<br/>
      Currently a Personal Trainer. Given the chance, he will turn you into a Hall of Famer.<br/>
      Also a programmer, web development to be specific. As time goes by the code becomes more exquisite.<br/>
      Has a passion for sport. You could say a jack of all trades.<br/>
      Loves baseball of course. Hey the kids got game.<br/>
      Addicted to self improvement. Not a bad habit have.<br/>
      A mystic and a humanist. Your boy has got swag.<br/>
      No boast or brag. Just stating the facts. Hire him as your trainer and you will never look back.<br/>
      This could go on forever so without further delay, the secret to life?<br/>
      Do something everday!</p>
    }else if(this.state.bio === false){
      bio = null;
    }

   return (
     <div className="bio-content">
         <p>Who is Kato?</p>
         <div className="bioButton" onClick={this.openBio}><span>Bio Poem</span></div>
         {bio}
     </div>
   );
 }
}
