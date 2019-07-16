import React, { PureComponent } from 'react';
import { Formik,Form } from 'formik';

//import { Test } from './FormComp.styles';

class FormComp extends PureComponent { 

  state = {
    formObject:{id:0,typ:''}
  }

  componentDidMount = ()=> {
    if(this.props.isEdit){
      console.log('monuje',this.props.inEdit)
    this.setState({
      formObject:this.props.inEdit
    })}
  }

  componentDidUpdate = ()=> {
    if(this.props.isEdit){
      console.log('updatuje',this.props.inEdit)
    this.setState({
      formObject:this.props.inEdit
    })}
  }
  

  render () {
    const {formObject} = this.state;
    const {inEdit,onResetEditType} = this.props;

    console.log('dostaje',inEdit)
    return (
      <div>
      <h3>Edycja elementu id = {inEdit.id} </h3>
      <Formik
        initialValues={{...inEdit}}
        onSubmit={(values)=>{
          console.log('values',values)
          onResetEditType()
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
          <input 
            type="typ"
            name="typ"
            onChange={handleChange}
            value={values.typ}
          />
          <br/>
          <button type="submit">Update</button>
          
        </Form>
      )
    }
      />
    </div>    
    );
  }
}

export default FormComp;

/**
 *         render  {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,

        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            
          </form>
        )}

 */