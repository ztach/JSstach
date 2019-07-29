import React, { PureComponent } from 'react';
import TabListSzablon from '../../szablon/TabListSzablon';
import TChecTypeDel from '../TChecTypeDel/TChecTypeDel';

class DictList extends PureComponent { 
  state = {}

  render () {
  const {
         dict,
         isInsertDict,
         onChangeDictCheck,
         checkTab,
         onClickDeleteDict,
         onEditDict,
         onInsertDict}=this.props;         

  const theader = ['Id','Hasło','Znaczenie','typId','polecenieid','Usuń','Edytuj'];
  const action=['Del','Edit','Insert'] ; 

  const tbodyr = dict.map(item => 
    <tr key={item.id} >
      <td>{item.id}</td>
      <td> {item.sl} </td>
      <td> {item.gt} </td>
      <td> {item.typ_id} </td>
      <td> {item.polecenie_id} </td>
      <td>
      <TChecTypeDel 
          action={action[0]}
          item={item} 
          onChangeDictCheck={onChangeDictCheck} 
          onActionType={onClickDeleteDict}
          checkTab={checkTab} 
          /> 
      </td>
      <td>
      <TChecTypeDel 
          action={action[1]}
          item={item} 
          onChangeDictCheck={onChangeDictCheck} 
          onActionType={onEditDict}
          checkTab={checkTab} 
          />       
      </td>
    </tr>
      )
  

  
    return (
      <div className="RPanel___up__left">
        
          <h3>Lista haseł do odgadnięcia</h3>
      <button 
          type="submit" 
          className="tabType___body_del_btn btn_position_dict"
          name="insert" 
 
          onClick={onInsertDict} 
          >
            {isInsertDict?
            <div className="btn_position_zamknij"> Z a m k n i j </div>
            :
             <div className="btn_position_wstaw"> W s t a w  -  n o w e -   h a s ł o  </div>
            }
      </button>    
        
      <TabListSzablon tbodyr={tbodyr}  theader={theader} />    
    </div>
    );
    }
}


export default DictList;
