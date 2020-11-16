import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class StreamForm extends Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    return null;
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
    this.props.onFormSubmit(formValues);
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

// reduxForm is used to bind user interactions to dispatches of Redux actions
// which means; whenever a user interacts with input components that are located in
// Field components, they will dispatch redux actions to update the piece of state
// that is named with the "form" property of the config object. The config object also
// provides validation method for the form inputs before updating the state with them.
export default reduxForm({
  // the name of your form and the key to where your form's state will be mounted
  // under the redux-form reducer
  form: "streamForm",
  // validation method
  validate,
})(StreamForm);
