import React from 'react';
import {Link} from 'react-router-dom';

  class Header extends React.Component {

    state={
      isClicked:false,
      isApiClicked:false,
      isGameClicked:false,
    }

    onHandleClicked = e => {
      let zadanie = e.target.name;
      if(zadanie==="config"){
        this.setState({
          isApiClicked:true,
          isGameClicked:false,
        })
      }
      if(zadanie==="game"){
        this.setState({
          isApiClicked:false,
          isGameClicked:true,
        })
      }
    }

    render(){
      const {isApiClicked, isGameClicked} = this.state;
    return (
    <header className="menuHeader">
      <nav className="menuHeader__nav">
        <ul className="menuHeader__nav__ul">
          <li className="menuHeader__nav__ul__li" ><Link to='/'>Home</Link></li>
          <li className="menuHeader__nav__ul__li" ><Link to= '/GetApi'>GetApi</Link></li>
          <li className="menuHeader__nav__ul__li" ><Link to='/MainGame'>MainGame</Link></li>
        </ul>
      </nav>
    </header>
  )}}

  export default Header;