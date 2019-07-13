import React from 'react';

const TChecTypeDel = props => {
  const {item, onClickDeleteType}=props;  
//onChangeTypCheck,checkTab,
    return (
      <div>
      {/* <input type="checkbox" onChange={onChangeTypCheck} name={item.typ} id={item.id} />    */}
      <button type="submit" name={item.typ} id={item.id} onClick={onClickDeleteType} >x</button> 
      </div>
    );
}

export default TChecTypeDel;
