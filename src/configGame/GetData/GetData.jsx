import React, { PureComponent } from 'react';

import InsertDataType from '../InsertDataType/InsertDataType';
import TypeList from '../TypeList/TypeList';
import DictList from '../DictList/DictList';
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
      isEdit: false,
      isInsertTyp:false,
      isInsertDict:false
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

  onEditDict = async (e) => {
    const id = e.target.id;
    const dict = await getAllType.getd(id);
    this.setState({
      inEdit:dict,
      isEdit:true
    })
  }

  onInsertType =() => {
    this.setState({
      isInsertTyp: !this.state.isInsertTyp
    })
  }

  onInsertDict =() => {
    this.setState({
      isInsertDict: !this.state.isInsertDict
    })
  }


  onResetEditType = () => {
    this.setState({
      inEdit:'',
      isEdit: false
    })
  }

  onUpdateEditType = async (id,values) => {
    await getAllType.update(id,values);
    const type = await getAllType.getAllTypes();
    this.setState({
      type,
      isTypeLoading:true,
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


  onClickSaveType = async (x) => {
    const {type} = this.state;
    const id = this.mId().id;

    const typ = await getAllType.create({typ:x})
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
    const {dict,type,checkTab,isTypeLoading,isDictLoading,error,isInsert} = this.state;    

      
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

       
  return (
    <div className="RPanel">
        <div className="RPanel___up"> 
          {isDictLoading? 
            <>
            {
              dict.length>0
              ?
              <DictList 
                dict={dict}
                isInsert={isInsert}
                checkTab={checkTab} 
                onClickDeleteDict={this.onClickDeleteDict}
                onEditDict={this.onEditDict}
                onInsertDict={this.onInsertDict}
                 />
              :
              null
            }
            </>
            :  
              <div>{error}</div>  
            }

          {isTypeLoading?
          <TypeList  
              type={type} 
              isInsert={isInsert}
              checkTab={checkTab} 
              onClickDeleteType={this.onClickDeleteType}
              onEdityType={this.onEdityType}
              onInsertType={this.onInsertType}
              />
          :
          <div>{error}</div>
          }
    </div>
    <div className="RPanel___down"> 
       

       <div className="RPanel___down__left">
         {this.state.isEdit?
          <FormComp 
          inEdit={this.state.inEdit}
          isEdit={this.state.isEdit}
          onResetEditType={this.onResetEditType}
          onUpdateEditType={this.onUpdateEditType}
          />
          :
          null
         }
         
       </div>

       <InsertDataType 
          type={type}
          dict={dict}
          mId={this.mId}
          draft={this.state.draft}
          isInsert={isInsert}
          onChangeAddType={this.onChangeAddType}
          onClickSaveType={this.onClickSaveType}
          /> 
       
    </div>
    
  </div>
      
  );
}
}


export default GetData;

