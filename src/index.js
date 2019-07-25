import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter as Router} from 'react-router-dom'
import './style/index.css';
import * as serviceWorker from './serviceWorker';
//import MainMenu from './configGame/App/MenuGet'
import MainMenu from './Menu'


ReactDOM.render((
    
      <MainMenu/>
    
  ), document.getElementById('root'));


// ReactDOM.render(<GetModal />, document.getElementById('modal'));
// ReactDOM.render(<GetApi />, document.getElementById('root'));



serviceWorker.unregister();
