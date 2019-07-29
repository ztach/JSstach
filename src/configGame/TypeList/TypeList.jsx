import React from 'react';
import TabListSzablon from '../../szablon/TabListSzablon';
import TChecTypeDel from '../TChecTypeDel/TChecTypeDel';
import './TypeList.scss';
 

const TypeList = props => {
const {
      type,
      isInsertTyp,
      onChangeTypCheck,
      checkTab,
      onClickDeleteType,
      onEditType,
      onInsertType}=props;

  const theader = ['Id','Hasło','Usuń','Edytuj'];
  const action=['Del','Edit','Insert'] ; 

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
        onActionType={onEditType}
        checkTab={checkTab} 
        />       
    </td>
  </tr>
    ) 

return (
      <div className="RPanel___up__right">
      <h3>Lista obowiązujących typów haseł</h3>
     
      <button 
          type="submit" 
          className="tabType___body_del_btn btn_position"
          name="insert" 
 
          onClick={onInsertType} 
          >
            {isInsertTyp?
            <div className="btn_position_zamknij"> Z a m k n i j </div>
            :
             <div className="btn_position_wstaw"> W s t a w  -  n o w y -   t y p  </div>
            }
      </button>    
      
      <TabListSzablon tbodyr={tbodyr}  theader={theader} />    

    </div>
    );
}



export default TypeList;
