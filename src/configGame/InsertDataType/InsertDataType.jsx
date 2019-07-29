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
    const {mId,isInsertTyp,isInsertDict} = this.props;
    const maxId = mId();

    if((!isInsertTyp && !isInsertDict) || (isInsertTyp && isInsertDict)  ){
      return (
        <div>Czekam ...</div>
      )
    }

    return (
      <div className="RPanel___down__right">
      {isInsertTyp?
        <h3>Max Id = {maxId.id} : {maxId.typ}</h3>
        :
        null
      }
        <Formik
         onSubmit={(values)=>{
          if(isInsertTyp){
            this.props.onClickSaveType(values.typ)
          }
          if(isInsertDict){
            this.props.onClickSaveDict(values);
          }
          
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

        {isInsertTyp && !isInsertDict ?

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
          :null
          }

          {!isInsertTyp && isInsertDict ?
          <>
            <label className="RPanel___down__right_label_dict"> 
            <h4>Wprowadź nowe hasło:</h4>
            <div>{errors.content}</div>

            <input
            className="RPanel___down__right_input_dict" 
            type="text" 
            name="sl" 
            id="sl" 
            onChange={handleChange}
            />
            </label>


            <label className="RPanel___down__right_label_dict"> 
            <h4>Wprowadź znaczenie hasła:</h4>
            <div>{errors.content}</div>

            <input
            className="RPanel___down__right_input_dict" 
            type="text" 
            name="gt" 
            id="gt" 
            onChange={handleChange}
            />
            </label>


            <label className="RPanel___down__right_label_dict"> 
            <h4>Wprowadź id typu:</h4>
            <div>{errors.content}</div>

            <input
            className="RPanel___down__right_input_dict" 
            type="number" 
            name="typ_id" 
            id="typ_id" 
            onChange={handleChange}
            />
            </label>


            <label className="RPanel___down__right_label_dict"> 
            <h4>Wprowadź id polecenia:</h4>
            <div>{errors.content}</div>

            <input
            className="RPanel___down__right_input_dict" 
            type="number" 
            name="polecenie_id" 
            id="polecenie_id" 
            onChange={handleChange}
            />
            </label>            
          </>
          :null
          }



          
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

