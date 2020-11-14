import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    // find the user with the ID equal to the ID provided with the props
    const user = this.props.users.find((user) => user.id === this.props.userId);

    // to not get error in the initial render
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
