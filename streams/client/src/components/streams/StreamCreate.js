import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ input, label }) {
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

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
