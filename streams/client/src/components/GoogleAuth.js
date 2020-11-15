import React, { Component } from "react";

const CLIENT_ID =
  "1039097660264-7adirsvjkn234a4a7gl5jcugrcfplh30.apps.googleusercontent.com";

class GoogleAuth extends Component {
  // Initialize Google API library with OAuth client ID
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      // this callback will be called after Google API finishes loading the required library
      window.gapi.client.init({
        clientId: CLIENT_ID,
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
