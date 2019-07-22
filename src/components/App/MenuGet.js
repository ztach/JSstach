import React from 'react';
import Main from './Main';
import LayoutWrapper from './LeyautWrapper';
import './App.scss';  


class Menu extends React.Component {

  state ={
    isGetApi:false,
    isGetModal:false,
    isHome:false
  }
  onClickGetApi = () => {
    this.setState({
      isGetApi:true,
      isGetModal:false,
      isHome:false  
    })
  }

  onClickGetModal = () => {
    this.setState({
      isGetApi:false,
      isGetModal:true,
      isHome:false
    })
  }

  onClickGetHome = () => {
    this.setState({
      isGetApi:false,
      isGetModal:false,
      isHome:true  
    })
  }

  // onClickGetApi
  // onClickGetModal
  // onClickGetHome

  render(){
    return (
    <div>
      <Main />
      <LayoutWrapper  className="menuHeader">
        <p>Witaj</p>
      </LayoutWrapper>
    </div>
      );
   }
  }


 export default Menu;
 