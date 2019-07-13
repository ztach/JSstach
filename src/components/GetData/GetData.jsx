import React, { PureComponent } from 'react';
import InsertDataType from '../InsertDataType/InsertDataType';
import TypeList from '../TypeList/TypeList';
import getDictList from '../../common/getDictList';
import MyNewApi from '../MyNewApi/MyNewApi';
import './GetData.scss';


class GetData extends PureComponent { 
  
    state = {
      dict:[],
      type:[],
      isDictLoading:false,
      isTypeLoading:false,
      error:null,
      checkTab:[],
      idDeleting:false,
    };
 
  componentDidMount ()  {
    this.fetchDict();
    this.fetchTypes();
    }

  fnGetDataDict = () => {
    let dane = getDictList(`http://localhost:3001/`,`dict`);
    this.setState({dict:dane});
  }
  
   componentDidUpdate = () => {
     if(this.state.idDeleting){
       this.fetchTypes() 
       this.setState({idDeleting:false});
    }
   }

fetchDict = () => {
    fetch(`http://localhost:3001/dict`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          dict: data,
          isDictLoading: true,
        })
      )
      .catch(error => this.setState({ error, isDictLoading: false }))
  }

  fetchTypes = () => {
    fetch(`http://localhost:3001/type`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          type: data,
          isTypeLoading: true,
        })
      )
      .catch(error => this.setState({ error, isTypeLoading: false }));
  }


  onChangeTypCheck = e => {
    let isChecked = e.target.checked;
    const id = parseInt(e.target.id);
    const typ = e.target.name.toString();
    if(isChecked){
      let w ={
        id,
        typ
      }
      this.setState({
        checkTab: [...this.state.checkTab,w]
      })
    }else{
      const delTab = this.state.checkTab;
      let delId = delTab.filter(item => item.id !== id);
      this.setState({
        checkTab: delId
      })
    }
    if(this.props.idDeleting){
      e.target.checked = false
    }
  }

  onClickDeleteType = e => {
    const id = e.target.id;
    
    fetch('http://localhost:3001/type/'+id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         }
      })
      .then(res => res.json()) // OR res.json()
      .then( this.setState({idDeleting:true}))

  }


  render () {
    const {dict,type,checkTab,isTypeLoading,isDictLoading,error} = this.state;
    let slowa=[];
    let message="czekam na załadowanie ";

  if (!isDictLoading && !isTypeLoading){
        return (
          <div>
            <p>{message} baz: DICT i TYPE</p>
          </div>
        )
  }

  if (isDictLoading && !isTypeLoading){
      return (
        <div>
          <p>{message} bay: TYPE</p>
        </div>
      )
  }

  if (!isDictLoading && isTypeLoading){
    return (
      <div>
        <p>{message} bay: DICT</p>
      </div>
    )
  }


  if(isDictLoading && isTypeLoading){
      if(dict.length>0){
        slowa = dict.map(item=> 
        <li key={item.id}>{item.id}. {item.sl} - typ pytania: '{item.gt}' (id typu: {item.typ}) </li>
          )
        }
  }

        
  return (
    <div className="Panel">
        <div className="Panel___up"> 

          {isDictLoading? 
            <div className="Panel___up__left">
              <h3>Lista haseł do odgadnięcia</h3>
              <ul>
              {slowa}
              </ul>
            </div>
            :  
              <div>{error}</div>  
            }

          {isTypeLoading?
          <TypeList 
              type={type} 
              checkTab={checkTab} 
              onChangeTypCheck={this.onChangeTypCheck} 
              onClickDeleteType={this.onClickDeleteType}
              />
          :
          <div>{error}</div>
          }
    </div>
    <div className="Panel___down"> 
       

       <div className="Panel___down__left">
          <MyNewApi />
       </div>

       <InsertDataType type={type}  fetchTypes={this.fetchTypes} />

    </div>
  </div>
      
  );
}
}


export default GetData;
