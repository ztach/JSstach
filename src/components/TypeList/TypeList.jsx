import React from 'react';
import TabListSzablon from '../../szablon/TabListSzablon';
import TChecTypeDel from '../TChecTypeDel/TChecTypeDel';



const TypeList = props => {
const {type,onChangeTypCheck,checkTab,onClickDeleteType,onEdityType}=props;

  const theader = ['Id','Hasło','Usuń','Edytuj'];
  const action=['x','Edit'] ;

  const tbodyr = type.map(item => 
  <tr key={item.id} >
    <td className="tabType___body_id">{item.id}</td>
    <td className="tabType___body_typ"> {item.typ} </td>
    <td className="tabType___body_del">
    <TChecTypeDel 
        action={action[0]}
        item={item} 
        onChangeTypCheck={onChangeTypCheck} 
        onActionType={onClickDeleteType}
        checkTab={checkTab} 
        /> 
    </td>
    <td className="tabType___body_del">
    <TChecTypeDel 
        action={action[1]}
        item={item} 
        onChangeTypCheck={onChangeTypCheck} 
        onActionType={onEdityType}
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
