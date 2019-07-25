import React from 'react';
import {Route,Switch} from 'react-router';

import GetModal from '../App/GetModal';
import GetApi from '../App/GetApi';
import GetContext from '../App/GetContex/GetContext';

const Main = () => {

    return (
    <main  className="styleMain" >
      <Switch>
        <Route path="/" exact />
        <Route path="/GetApi" component={GetApi} />
        <Route path="/GetModal"  component={GetModal} />
        <Route path="/GetContext"  component={GetContext} />
      </Switch>
    </main>
    )
}

export default Main;