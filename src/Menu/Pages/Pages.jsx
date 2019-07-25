import React from 'react';
import { Route,Switch } from 'react-router-dom';
import TypeChange from '../../configGame/GetData/GetData';
import HomePage from '../../HomePage';
import MainGame from '../../wisielecGame/MainGame/MainGame';
import ContactPage from '../../ContactPage';
import AdminPage from '../../AdminPage';



const Pages = props => {

    return (
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/gra"  component={MainGame}  />
      <Route path="/konfiguracja" exact component={TypeChange}/>
      <Route path="/contact"  component={ContactPage} />
      <Route path="/admin"  component={AdminPage} />
    </Switch>
      );
}
 
export default Pages;

/**
 *       
      
      

 */