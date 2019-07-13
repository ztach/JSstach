import React from 'react';

import TabListSzablon from '../../szablon/TabListSzablon';
import TChecTypeDel from '../TChecTypeDel/TChecTypeDel';



const TypeList = props => {
const {type,onChangeTypCheck,checkTab,onClickDeleteType}=props;

const theader = ['Id','Hasło','Akcja'];
      
  const tbodyr = type.map(item => 
  <tr key={item.id} >
    <td>{item.id}</td>
    <td> {item.typ} </td>
    <td>
    <TChecTypeDel 
        item={item} 
        onChangeTypCheck={onChangeTypCheck} 
        onClickDeleteType={onClickDeleteType}
        checkTab={checkTab} 
        /> 
    </td>
  </tr>
    )

return (
      <div className="Panel___up__right">
      <h3>Lista obowiązujących typów haseł</h3>
      <TabListSzablon tbodyr={tbodyr}  theader={theader} />
    </div>
    );
}



export default TypeList;
