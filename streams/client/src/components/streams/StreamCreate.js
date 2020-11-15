import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  handleFormSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    // If a Field component sees a prop it doesn't know(label in the current case), it will
    // just add the new prop to the end of the props object it passes as an argument
    // to the function in component prop.
    return (
      <form
        onSubmit={this.props.handleSubmit(this.handleFormSubmit)}
        className="ui form error"
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

// This function is used to bind user interactions to dispatches of Redux actions
// which means; whenever a user interacts with input components that are located in
// Field components, they will dispatch redux actions to update the piece of state
// that is named with the "form" property of the config object. The config object also
// provides validation method for the form inputs before updating the state with them.
export default reduxForm({
  // the name of your form and the key to where your form's state will be mounted
  // under the redux-form reducer
  form: "streamCreate",
  // validation method
  validate,
})(StreamCreate);
