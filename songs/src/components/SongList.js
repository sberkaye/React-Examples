import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

// this method will be called whenever the store is updated
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// this creates a wrapped component and "connects" it to Redux store
export default connect(mapStateToProps)(SongList);
