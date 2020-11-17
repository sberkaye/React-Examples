import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  const { id } = props.match.params;
  // Component isolation
  useEffect(() => {
    props.fetchStream(id);
  }, [props, id]);

  if (!props.stream) {
    return <div>Loading...</div>;
  }

  const { title, description } = props.stream;

  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
