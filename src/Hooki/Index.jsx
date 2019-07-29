import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route,Switch} from 'react-router';
import {NavLink} from 'react-router-dom';
import Fibbonaci from './Fibbonaci/Fibbonaci';
import Licznik from './Licznik/Licznik'
import './index.scss';

const Header = () => {

  return (
  <header className="SubMenu">
    <nav >
      <ul >
      <li  ><NavLink to='/'>Home</NavLink></li>
        <li  ><NavLink to='/Fibbonaci'>Fibbonaci</NavLink></li>
        <li  ><NavLink to='/Licznik'>Licznik</NavLink></li>
      </ul>
    </nav>
  </header>
)}


const Pages = () => (
  <main  className="styleMain" >
  <Switch>
    <Route path="/" exact />
    <Route path="/Fibbonaci"  component={Fibbonaci} />
    <Route path="/Licznik"  component={Licznik} />

  </Switch>

</main>
)

const SubMenu = () => {
  return (
  <Router>
  {<Header />}
  {<Pages/>}
  </Router>
)}



export default SubMenu;
