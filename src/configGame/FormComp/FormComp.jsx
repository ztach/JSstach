import React, { PureComponent } from 'react';
import { Formik,Form } from 'formik';
//import {update} from '../helpers/typeApi';

class FormComp extends PureComponent { 
 
  state = {
    // formObject:{id:0,typ:''}
  }


  render () {

    const {inEdit,onResetEditType,onUpdateEditType} = this.props;

    return (
      <div className="insertBlock" >
      <h3>Edycja elementu id = {inEdit.id} </h3>
      <Formik
        initialValues={{...inEdit}}
        onSubmit={(values)=>{
          onUpdateEditType(inEdit.id,values);
          onResetEditType();
        }}
        validate={(values) => {
          let errors={}
          if(!values.typ) {
            errors.content="Required"
          } else if(values.typ.length < 3){
            errors.content="Za ktrótki wpis. Minimum 3 znaki...";
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
          <label>
            Content *
            <div className="insertBlock__error">{errors.content}</div>
          <input 
            className="insertBlock__insert"
            type="typ"
            name="typ"
            onChange={handleChange}
            value={values.typ}
          />
          </label>
          <div className="insertBlock__btn">
          <button className="RPanel___down__right_btn insertBlock__btn_add"  type="submit">Update</button>
          <button className="RPanel___down__right_btn insertBlock__btn_add"  type="exit" onClick={onResetEditType} >Exit</button>
          </div>
        </Form>
      )
    }
      />
    </div>    
    );
  }
}

export default FormComp;

