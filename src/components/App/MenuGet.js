import React from 'react';
//import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Route,Switch,Link} from 'react-router-dom';
import GetModal from './GetModal';
import GetApi from './GetApi';


const Main = props => {
    
    return (
    <main>
      <Switch>
        <Route path="/" exact />
        <Route path="/GetApi"  component={GetApi} />
        <Route path="/GetModal"  component={GetModal} />
      </Switch>
    </main>
    )
}

  const Header = () => (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to= '/GetApi'>GetApi</Link></li>
          <li><Link to='/GetModal'>GetModal</Link></li>
        </ul>
      </nav>
    </header>
  )
  


class Menu extends React.Component {
    state = { 
    };

 
render() {

    return (

    <div>
        <Header />
        <Main  />
    </div>
      
      );
     }
 }
 
 export default Menu;



                
