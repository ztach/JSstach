import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

const Header = (props) => {

  const menuList = [
    {name:'info',path:'/',style:'info_selected',exact:true},
    {name:'gra',path:'/gra',style:'gra_selected'},
    {name:'konfiguracja',path:'/konfiguracja',style:'ustawienia_selected'},
    {name:'kontakt',path:'/contact',style:'contact_selected'},
    {name:'panel admina',path:'/admin',style:'admin_selected'}
  ]
  
  const menu = menuList.map(item => (
    <li className="header___li" key={item.name}>
        <NavLink className="header___li___item" to={item.path}
        exact={item.exact? item.exact : false }
        >
            {item.name}
        </NavLink>
    </li>
    )
)

return (
  <>
  <nav className="header___nav">
    <ul className="header___ul">
    {menu}
    </ul>
  </nav>
  </>
)
};


export default Header;
