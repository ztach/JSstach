import React from 'react';
import './Menu.scss';  


const SplitPane = (props) => {
  
  return (
    <div className="SplitPane">
          
    <div className="SplitPane-mypanel"> {props.panel} </div>
    <div className="SplitPane-menu"> {props.menu} </div>
    <div className="SplitPane-footer"> {props.footer} </div>

    </div>
  );
}

export default SplitPane;

/**
 * 
      <div className="SplitPane-up"> 
          <div className="SplitPane-up-left">
            {props.upleft}
          </div>
          <div className="SplitPane-up-right">
            {props.upright}
          </div>
      </div>

      <div className="SplitPane-down"> 
          <div className="SplitPane-down-left">
            {props.downleft}
          </div>
          <div className="SplitPane-down-right">
            {props.downright}
          </div>
      </div>
 */