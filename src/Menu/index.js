import React, { PureComponent } from 'react';

//import Header from '../Navigation/Header';
//import {Route,Switch,Link} from 'react-router-dom';
//import MainGame from '../wisielecGame/MainGame/MainGame';
//import GetApi from '../configGame/GetData/GetData'

import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NaviBar from './NaviBar/NaviBar';
import './Menu.scss';
import Pages from './Pages/Pages';



class MyMenu extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
 

  render () {
    return (
      <Router basename={process.env.PUBLIC_URL} >
      <div className="SplitPane"> 
      <header className="SplitPane-menu">
        <div className="head">
        {<NaviBar/>}
        </div>

        <div className="menuHeader">
          {<Header />}
        </div>
      </header>

      
      <main  className="SplitPane-main">
        {<Pages/>}
      </main>
      <footer className="SplitPane-footer" >
        {<Footer/>}
      </footer>
      </div>
      </Router>
    )
  }
}


export default MyMenu;
