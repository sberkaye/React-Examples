import React from "react";

class VideoItem extends React.Component {
  render() {
    const { video } = this.props;
    return (
      <div className="item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
