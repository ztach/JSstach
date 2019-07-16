import React, { PureComponent } from 'react';
import { Formik } from 'formik';

//import { Test } from './FormComp.styles';

class FormComp extends PureComponent { 

  state = {
  }

  // handleChange(event) {
  //   this.setState({values: event.target.values});
  // }

  

  render () {
    const {inEdit} = this.props;

    return (
      <div>
      <h3>Edycja elementu id = {inEdit.id} </h3>
      <Formik
        initialValues={{...inEdit}}
        onSubmit={(values)=>{
          console.log(values)
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
        <form onSubmit={handleSubmit}>
          <input 
            name='content'
            onChange={handleChange}
            value={values.content}
          />
          <br/>
          <button type="submit">Update</button>
          
        </form>
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