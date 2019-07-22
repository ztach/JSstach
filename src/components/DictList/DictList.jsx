import React, { PureComponent } from 'react';

//import { Test } from './DictList.styles';

class DictList extends PureComponent { 
    state = {
            }


  render () {
  const {dict}=this.props;
  

  let slowa = dict.map(item=> 
      <li key={item.id}>{item.id}. {item.sl} - typ pytania: '{item.gt}' (id typu: {item.typ}) </li>
        )

    return (
      <div className="Panel___up__left">
      <h3>Lista haseł do odgadnięcia</h3>
      <ul>
      {slowa}
      </ul>
    </div>
    );
    }
}


export default DictList;
