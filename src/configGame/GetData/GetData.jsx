import React, { PureComponent } from 'react';

import InsertDataType from '../InsertDataType/InsertDataType';
import TypeList from '../TypeList/TypeList';
import DictList from '../DictList/DictList';
import FormComp from '../FormComp/FormComp';
import * as getAllType from '../../helpers/typeApi';
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
      isInsertDict:false,
      whoEdit:{
        inEdit:'',
        isEdit:false,
        whatEdit:null  /** 0 - typ, 1 - dict, null - nic */
      }
    };
 
  componentDidMount = async () => {

    const type = await getAllType.getAllTypes();
    const dict = await getAllType.getAllDict();
    
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
     await getAllType.destroyType(id)
    const {index} = this.findById(id,type)
    
     this.setState({
      type: _.remove(index,1,type)
    })
  }

  onClickDeleteDict = async (e) => {
    const id = e.target.id;
    const {dict} = this.state;
     await getAllType.destroyDict(id)
    const {index} = this.findById(id,dict)
    
     this.setState({
      dict: _.remove(index,1,dict)
    })
  }


  onEditType = async (e) =>{
    this.onResetEditType();
    const id = e.target.id;
    const typ = await getAllType.get(id)

    this.setState({
      whoEdit:{
        inEdit:typ,
        isEdit:true,
        whatEdit:0
      }
    })

  }

  onEditDict = async (e) => {
    const id = e.target.id;
    const dict = await getAllType.getd(id);
    // this.setState({
    //   inEdit:dict,
    //   isEdit:true
    // })

    this.setState({
      whoEdit:{
        inEdit:dict,
        isEdit:true,
        whatEdit:1
      }
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
      whoEdit:{
        inEdit:'',
        isEdit:false,
        whatEdit:null
      }
    })


  }

  onUpdateEditType = async (id,values) => {
    await getAllType.updateType(id,values);
    const type = await getAllType.getAllTypes();
    this.setState({
      type,
      isTypeLoading:true,
      })

  }

  onUpdateEditDict = async (id,values) => {
    await getAllType.updateDict(id,values);
    const dict = await getAllType.getAllDict();
    this.setState({
      dict,
      isDictLoading:true,
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
    const typ = await getAllType.createType({typ:x});
    this.setState({
      type: [...type,typ],
      draft:''
    })
  }

  onClickSaveDict = async (x) => {
    const {dict} = this.state;
    const {sl,gt,typ_id,polecenie_id} = x;
    const dic = await getAllType.createDict({sl,gt,typ_id,polecenie_id});
    this.setState({
      dict:[...dict,dic],
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
    const {dict,
           type,
           checkTab,
           isTypeLoading,
           isDictLoading,
           error,
           isInsertTyp,
           isInsertDict } = this.state;    

      
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
                isInsertDict={isInsertDict}
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
              isInsertTyp={isInsertTyp}
              checkTab={checkTab} 
              onClickDeleteType={this.onClickDeleteType}
              onEditType={this.onEditType}
              onInsertType={this.onInsertType}
              /> 
          :
          <div>{error}</div>
          }
    </div>
    <div className="RPanel___down"> 
       

       <div className="RPanel___down__left">
         {this.state.whoEdit.isEdit?
          <FormComp 
          // inEdit={inEdit}
          // isEdit={isEdit}
          whoEdit={this.state.whoEdit}
            
          onResetEditType={this.onResetEditType}
          onUpdateEditType={this.onUpdateEditType}
          onUpdateEditDict={this.onUpdateEditDict}
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
          isInsertDict={isInsertDict}
          isInsertTyp={isInsertTyp}
          onChangeAddType={this.onChangeAddType}
          onClickSaveType={this.onClickSaveType}
          onClickSaveDict={this.onClickSaveDict}
          /> 
       
    </div>
    
  </div>
      
  );
}
}


export default GetData;

