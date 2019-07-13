import React from 'react';
import ReactDOM from 'react-dom';
import './components/style/index.css';
import GetData from './components/GetData/GetData';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GetData />, document.getElementById('root'));

serviceWorker.unregister();
