import React from 'react';
import SplitPane from './SplitPane';
import Header from '../Navigation/Header';
import {Route,Switch,Link} from 'react-router-dom';
import GetModal from '../App/GetModal';
import GetApi from '../GetData/GetData'

const Main = () => {
  return (
  <main  className="styleMain" >
    <Switch>
      <Route path="/" exact />
      <Route path="/GetApi" component={Panel} />
      <Route path="/GetModal"  component={GetModal} />
      <Route path="/GetContext"  component={DownLeft} />
    </Switch>
  </main>
  )
}


const Navbar = () => {  
  return (
    <>
    <Main/>
    <Header/>
    </>
    );

}

const Panel = () => {
  return (
    <div className="MyPanel" >
    <GetApi />
    </div>
  )
}

const Footer = () => {
    return ( 
    <div className="myFooter" > 
     <Link to='/'>Back</Link>
    </div>
    )
  }

// const UpLeft = () => {
//     return ( 
//     <div className="UpLeft" > 
//     UpLeft
//     </div>
//     )
//   }

// const UpRight = () => {
//     return ( 
//     <div className="UpRight" > 
//     UpRight
//     </div>
//     )
//   }

const DownLeft = () => {
    return ( 
    <div className="DownLeft" > 
    DownLeft
    </div>
    )
  }

// const DownRight = () => {
//     return ( 
//     <div className="DownRight" > 
//     DownRight
//     </div>
//     )
//   }



 
  const MyMenu = () => {
    return (
      
      <SplitPane
        menu={<Navbar />}
        
        
        footer={<Footer/>}
      />
      
      
      );
   }
 


 export default MyMenu;
 
 /**
  *           upleft={<UpLeft />}
          upright={<UpRight />}

          downleft={<DownLeft />}
          downright={<DownRight />}

  */