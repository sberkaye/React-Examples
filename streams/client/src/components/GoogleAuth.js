import React, { Component } from "react";

const CLIENT_ID =
  "1039097660264-7adirsvjkn234a4a7gl5jcugrcfplh30.apps.googleusercontent.com";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  // Initialize Google API library with OAuth client ID
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      // this callback will be called after Google API finishes loading the required library
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          // After everything is ready, connect the auth instance to this component
          this.auth = window.gapi.auth2.getAuthInstance();
          /*
           *  When this method runs, the component has already been mounted and therefore
           *  rendered. So we need to get the component to re-render to be able to show
           *  if the user is logged in or not. We're going to be using component level state
           *  to achieve re-rendering. When the state is uupdated via this.setState(), the
           *  component will re-render and show whether the user is signed-in or not.
           */
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // Set an event listener to handle the situation whenever auth.isSignedIn changes
          this.auth.isSignedIn.listen(this.handleAuthChange);
        });
    });
  }

  // Event listeners
  handleAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  handleSignInClick = () => {
    this.auth.signIn();
  };

  handleSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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

export default GoogleAuth;
