import React from 'react';
import { Link } from 'react-router-dom';

const LayoutWrapper = (props) => {
  return (
    <header className="menuHeader">
      <nav className="menuHeader__nav">
        <ul className="menuHeader__ul">
          <li className="menuHeader__li" ><Link to='/'>Home</Link></li>
          <li className="menuHeader__li" ><Link to= '/GetApi'>GetApi</Link></li>
          <li className="menuHeader__li" ><Link to='/GetModal'>GetModal</Link></li>
          <li className="menuHeader__li" ><Link to='/GetContext'>GetContext</Link></li>
        </ul>
      </nav>
      <div className="container"> {props.children} </div>
    </header>
  )
}

export default LayoutWrapper;