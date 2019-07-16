import React, { PureComponent } from 'react';
//import getDictList from '../../common/getDictList';
//import * as getAllType from '../helpers/typeApi';
//import * as _ from 'ramda';


class InsertDataType extends PureComponent { 
    state = {
      isInsert:false,
    };
 
  render () {
    const {mId,draft} = this.props;

    const maxId = mId();
    return (
      <div className="Panel___down__right">
        Max Id = {maxId.id} : {maxId.typ}

        <label htmlFor="types" 
               className="Panel___down__right_label"> 
                Wprowadź nowy typ hasła:

          <input 
                onChange={this.props.onChangeAddType} 
                value={draft} 
                className="Panel___down__right_input" 
                type="text" 
                name="tyes" 
                id="types"
           />

        </label>
          <button 
              className="Panel___down__right_btn" 
              onClick={this.props.onClickSaveType} >
                Zapisz
          </button>
      </div>
    );
  }
}


export default InsertDataType;
