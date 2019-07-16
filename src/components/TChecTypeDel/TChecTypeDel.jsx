import React from 'react';

const TChecTypeDel = props => {
  const {item, onActionType,action}=props;  
//onChangeTypCheck,checkTab,
    return (
      <button 
          type="submit" 
          className="tabType___body_del_btn"
          name={item.typ} 
          id={item.id} 
          onClick={onActionType} 
          >
          {action}
      </button> 
    );
}

export default TChecTypeDel;

/* <input type="checkbox" onChange={onChangeTypCheck} name={item.typ} id={item.id} />    */