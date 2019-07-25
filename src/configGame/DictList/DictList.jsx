import React, { PureComponent } from 'react';
import TabListSzablon from '../../szablon/TabListSzablon';
import TChecTypeDel from '../TChecTypeDel/TChecTypeDel';

//import { Test } from './DictList.styles';

class DictList extends PureComponent { 
    state = {
            }


  render () {
  const {dict,isInsert,onChangeDictCheck,checkTab,onClickDeleteDict,onEditDict}=this.props;
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
  

/*
  let slowa = dict.map(item=> 
      <li key={item.id}>{item.id}. {item.sl} - typ pytania: '{item.gt}' (id typu: {item.typ_id}) </li>
        )
*/
  
    return (
      <div className="RPanel___up__left">
        
          <h3>Lista haseł do odgadnięcia</h3>
      
      <TabListSzablon tbodyr={tbodyr}  theader={theader} />    
    </div>
    );
    }
}


export default DictList;
