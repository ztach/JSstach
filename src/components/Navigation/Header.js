import React from 'react';
import {Link} from 'react-router-dom';

  const Header = () => (
    <header className="menuHeader">
      <nav className="menuHeader__nav">
        <ul className="menuHeader__nav__ul">
          <li className="menuHeader__nav__ul__li" ><Link to='/'>Home</Link></li>
          <li className="menuHeader__nav__ul__li" ><Link to= '/GetApi'>GetApi</Link></li>
          <li className="menuHeader__nav__ul__li" ><Link to='/GetModal'>GetModal</Link></li>
        </ul>
      </nav>
    </header>
  )

  export default Header;