import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import InsertDataType from '../InsertDataType/InsertDataType';
import TypeList from '../TypeList/TypeList';
//import getDictList from '../../common/getDictList';
//import MyNewApi from '../MyNewApi/MyNewApi';
import FormComp from '../FormComp/FormComp';
import * as getAllType from '../helpers/typeApi';
import * as _ from 'ramda';
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
      draft:'',
      inEdit:'',
      isEdit: false
    };
 
  componentDidMount = async () => {

    const type = await getAllType.getAllTypes();
    const dict = await getAllType.getAllDicts();
    
    this.setState({
      type,
      dict,
      isDictLoading:true,
      isTypeLoading:true,
      })
    }


  findById = (id,arr) => {
    const index = _.findIndex(_.propEq('id', parseInt(id)))(arr)
    return {index,typ:arr[index] }
  }


  onClickDeleteType = async (e) => {
    const id = e.target.id;
    const {type} = this.state;
     await getAllType.destroy(id)
    const {index} = this.findById(id,type)
    
     this.setState({
      type: _.remove(index,1,type)
    })
  }

  onEdityType = async (e) =>{
    this.onResetEditType();
    const id = e.target.id;
    const typ = await getAllType.get(id)
    this.setState({
      inEdit:typ,
      isEdit:true
    })
  }

  onResetEditType = () => {
    this.setState({
      inEdit:'',
      isEdit: false
    })
  }

  getMaxIdInArray = (arr) => {
    if(arr.length>0){
      let idTab = arr.map(item=>item).sort((x,y) => parseInt(x.id) - parseInt(y.id));
      return idTab[idTab.length-1];
    }
    return 0;
  }

   mId=() => this.getMaxIdInArray(this.state.type);


  onClickSaveType = async () => {
    const {type,draft} = this.state;
    const id = this.mId().id;

    const typ = await getAllType.create({id:id+1,typ:draft})
    this.setState({
      type: [...type,typ],
      draft:''
    })
  }

  onChangeAddType = e => {
    const value = e.target.value;
    this.setState({
      draft:value
    })
    return value
  }

 render () {
    const {dict,type,checkTab,isTypeLoading,isDictLoading,error} = this.state;    

  let slowa=[]
    
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
              onClickDeleteType={this.onClickDeleteType}
              onEdityType={this.onEdityType}
              />
          :
          <div>{error}</div>
          }
    </div>
    <div className="Panel___down"> 
       

       <div className="Panel___down__left">
         {this.state.isEdit?
          <FormComp 
          inEdit={this.state.inEdit}
          isEdit={this.state.isEdit}
          onResetEditType={this.onResetEditType}
          />
          :
          null
         }
       </div>

       <InsertDataType 
          type={type}
          mId={this.mId}
          draft={this.state.draft}
          onChangeAddType={this.onChangeAddType}
          onClickSaveType={this.onClickSaveType}
          />
       <Link to='/'>Back</Link>
    </div>

  </div>
      
  );
}
}


export default GetData;

