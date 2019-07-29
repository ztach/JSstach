import React, { PureComponent } from "react";
import { Formik, Form } from "formik";



class FormComp extends PureComponent {
  state = {};

  render() {
    const {
      whoEdit,
      onResetEditType,
      onUpdateEditType,
      onUpdateEditDict
    } = this.props;

    const { inEdit, whatEdit } = whoEdit;

    const submitTypeDict = values => {
      if (whatEdit === 0) {
        onUpdateEditType(inEdit.id, values);
      }
      else {
        onUpdateEditDict(inEdit.id, values);
      }
      onResetEditType();
    };

    const validateTyeDict = values => {
      let errors = {};
      validateTyp(whatEdit, values, errors);
      validateDict(whatEdit, values, errors);
      return errors;
    };

    return (
      <div className="insertBlock">
        <h3>Edycja elementu id = {inEdit.id} </h3>
        <Formik
          initialValues={{ ...inEdit }}
          onSubmit={submitTypeDict}
          validate={validateTyeDict}
          render={({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            this.UpdateTypeDictForm(handleSubmit, errors, whatEdit, handleChange, values, onResetEditType)
          )}
        />
      </div>
    );
  }

  UpdateTypeDictForm(handleSubmit, errors, whatEdit, handleChange, values, onResetEditType) {
    return <Form onSubmit={handleSubmit}>
      <label>
        Content *
        <div className="insertBlock__error">{errors.content}</div>
        {whatEdit === 0
          ? this.updateTyp(handleChange, values)
          : this.updateDict(handleChange, values)}
      </label>
      <div className="insertBlock__btn">
        <button className="RPanel___down__right_btn insertBlock__btn_add" type="submit">
          Update
        </button>
        <button className="RPanel___down__right_btn insertBlock__btn_add" type="exit" onClick={onResetEditType}>
          Exit
        </button>
      </div>
    </Form>;
  }

  updateTyp(handleChange, values) {
    return (
      <input
        className="insertBlock__insert"
        type="typ"
        name="typ"
        onChange={handleChange}
        value={values.typ}
      />
    );
  }

  updateDict(handleChange, values) {
    return (
      <>
        <input
          className="insertBlock__insert_sl"
          type="sl"
          name="sl"
          onChange={handleChange}
          value={values.sl}
        />
        <input
          className="insertBlock__insert_gt"
          type="gt"
          name="gt"
          onChange={handleChange}
          value={values.gt}
        />
        <input
          className="insertBlock__insert_typid"
          type="typ_id"
          name="typ_id"
          onChange={handleChange}
          value={values.typ_id}
        />

        <input
          className="insertBlock__insert_polecenieid"
          type="polecenie_id"
          name="polecenie_id"
          onChange={handleChange}
          value={values.polecenie_id}
        />
      </>
    );
  }
}

export default FormComp;

function validateTyp(whatEdit, values, errors) {
  if (whatEdit === 0) {
    if (!values.typ) {
      errors.content = "Required";
    } else if (values.typ.length < 3) {
      errors.content = "Za ktrótki wpis. Minimum 3 znaki...";
    }
  }
}

function validateDict(whatEdit, values, errors) {
  if (whatEdit === 1) {
    if (!values.sl) {
      errors.content = "Pole Hasło is Required";
    } else if (values.sl.length < 3) {
      errors.content = "Za ktrótki wpis w polu 'Hasło'. Minimum 3 znaki...";
    }
    if (!values.gt) {
      errors.content = "Pole Znaczenie is Required";
    } else if (values.gt.length < 3) {
      errors.content = "Za ktrótki wpis w polu 'Znaczenie'. Minimum 3 znaki...";
    }
    if (values.typ_id < 1 || values.polecenie_id < 1) {
      errors.content = "wpisz liczbę";
    }
  }
}
