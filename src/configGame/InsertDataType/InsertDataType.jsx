import React, { PureComponent } from 'react';
import { Formik,Form } from 'formik';
import './InsertDataType.scss';
 
class InsertDataType extends PureComponent { 
    state = {
      isDiffrent:true,
    };
 

  typExists = typ => {
    const tabTyb = [...this.props.typ]
    let x = tabTyb.find(i => i.typ === typ)
    return x;
  }
  
  fnTypeIsDiffrent = str => {
    const myTab = this.props.type;
    let tab = myTab.filter(i => i.typ === str.trim())
    let wynik={
      jest:false,
      val:''
    }
    if(tab.length > 0){
      wynik={
        jest:true,
        val:tab[0].typ
      }
    }
    return wynik;
  }


  render () {
    const {mId,isInsert} = this.props;
    const maxId = mId();
    if(!isInsert){
      return (
        <div>Czekam ...</div>
      )
    }

    return (
      <div className="RPanel___down__right">
        <h3>Max Id = {maxId.id} : {maxId.typ}</h3>

        <Formik
         onSubmit={(values)=>{
            this.props.onClickSaveType(values.typ)
            //onResetEditType();
         }}
        validate={(values) => {
          let errors={}
          let {jest,val} = this.fnTypeIsDiffrent(values.typ)
          if(!values.typ) {
            errors.content="Required"
          } else if(values.typ.length < 3){
            errors.content="Za ktrótki wpis. Minimum 3 znaki...";
          } else if(jest){
            errors.content= val + " - to hasło już istnieje"
          }
          
          return errors
        }}
      render={({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <label className="RPanel___down__right_label"> 
            <h4>Wprowadź nowy typ hasła:</h4>
            <div>{errors.content}</div>
            
          <input
            className="RPanel___down__right_input" 
            type="text" 
            name="typ" 
            id="typ" 
            onChange={handleChange}
          />
          </label>
          
          <button className="RPanel___down__right_btn"  type="submit">Save</button>

        </Form>
      )
    }
      />

    
      </div>
    );
  }
}


export default InsertDataType;

/**
 *           <button className="RPanel___down__right_btn"  type="exit" onClick={onResetEditType} >Exit</button>
 * ----------------
        <label htmlFor="types" 
               className="RPanel___down__right_label"> 
                Wprowadź nowy typ hasła:

          <input 
                onChange={this.props.onChangeAddType} 
                value={draft} 
                className="RPanel___down__right_input" 
                type="text" 
                name="tyes" 
                id="types"
           />

        </label>
          <button 
              className="RPanel___down__right_btn" 
              onClick={this.props.onClickSaveType} >
                Zapisz
          </button>
-----------------          

 */