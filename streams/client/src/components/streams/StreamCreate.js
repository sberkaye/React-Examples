import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ input, label, meta }) {
    /*
    return (
      <input
        value={formProps.input.value}
        onChange={formProps.input.onChange}
      />
    );
    */
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {meta.error}
      </div>
    );
  }

  handleFormSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    // If Label components sees a prop it doesn't know(label in the current case), it will
    // just add the new prop to the end of the props object it passes as an argument
    // to the function in component prop
    return (
      <form
        onSubmit={this.props.handleSubmit(this.handleFormSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Title can't be empty";
  }

  if (!formValues.description) {
    errors.description = "Description can't be empty";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
