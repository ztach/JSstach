import React, { PureComponent } from 'react';
import getDictList from '../../common/getDictList';

class InsertDataType extends PureComponent { 
    state = {
      newType:"",
      isInsert:false,
    };
  

    componentDidUpdate = () => {
      if(this.state.isInsert){
        //this.props.fetchTypes();
        getDictList(`http://localhost:3001/`,`dict`);
      }
    }

    getMaxIdInArray = (arr) => {
      if(arr.length>0){
        let idTab = arr.map(item=>item).sort((x,y) => parseInt(x.id) - parseInt(y.id));
        return idTab[idTab.length-1];
      }
      return 0;
    }

    onChangeAddType = e => {
      const value = e.target.value;
      this.setState({
        newType:value
      })
      return value
    }
  
    onClickSaveType = (mId) => {
      const value = this.state.newType;
      if(value !==""){
      fetch('http://localhost:3001/type/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify({
            id:mId,
            typ:value.toString()
          })
      })
      .then(response => {
        if(response.ok){
          this.setState({isInsert:!this.state.isInsert})
          console.log('====================================');
          console.log('prawda');
          console.log('====================================');
        }
      })
    }
  }

  render () {
    const {type} = this.props;
    const {newType} = this.state;

    const maxId = this.getMaxIdInArray(type)
    return (
      <div className="Panel___down__right">
        Max Id = {maxId.id} : {maxId.typ}

        <label htmlFor="types" className="Panel___down__right_label"> Wprowadź nowy typ hasła:
          <input onChange={this.onChangeAddType} value={newType} className="Panel___down__right_input" type="text" name="tyes" id="types"/></label>
          <button className="Panel___down__right_btn" onClick={this.onClickSaveType.bind(this,(maxId.id+1))} >Zapisz</button>
      </div>
    );
  }
}


export default InsertDataType;
