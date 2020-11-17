import React, { Component } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";
import { GOOGLE_CLIENT_ID } from "../credentials";

class GoogleAuth extends Component {
  // Initialize Google API library with OAuth client ID
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      // this callback will be called after Google API finishes loading the required library
      window.gapi.client
        .init({
          clientId: GOOGLE_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          // After everything is ready, connect the auth instance to this component
          this.auth = window.gapi.auth2.getAuthInstance();
          // Immediately update the auth state in redux store
          this.handleAuthChange(this.auth.isSignedIn.get());
          // Set an event listener to handle the situation whenever auth.isSignedIn changes
          this.auth.isSignedIn.listen(this.handleAuthChange);
        });
    });
  }

  // Event listeners

  // this callback will get isSignedIn as an argument from our auth object and will run
  // whenever this.auth.isSignedIn changes because it is assigned as the event listener
  // by the "listen" method above.
  handleAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  handleSignInClick = () => {
    this.auth.signIn();
  };

  handleSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    // There is a small time window before the ".then()" callback of init method runs,
    //  so in that time frame "isSignedIn" will hold its default value of "null"
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={this.handleSignOutClick}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui blue google button"
          onClick={this.handleSignInClick}
        >
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
