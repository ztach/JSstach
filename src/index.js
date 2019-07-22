import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './components/style/index.css';
import * as serviceWorker from './serviceWorker';
//import MainMenu from './components/App/MenuGet'
import MainMenu from './components/Menu/Menu'


ReactDOM.render((
    <Router>
      <MainMenu/>
    </Router>
  ), document.getElementById('root'));


// ReactDOM.render(<GetModal />, document.getElementById('modal'));
// ReactDOM.render(<GetApi />, document.getElementById('root'));



serviceWorker.unregister();
