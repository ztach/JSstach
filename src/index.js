import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './components/style/index.css';
import * as serviceWorker from './serviceWorker';
import MenuGet from './components/App/MenuGet';


ReactDOM.render((
    <BrowserRouter>
      <MenuGet />
    </BrowserRouter>
  ), document.getElementById('root'));


// ReactDOM.render(<GetModal />, document.getElementById('modal'));
// ReactDOM.render(<GetApi />, document.getElementById('root'));



serviceWorker.unregister();
