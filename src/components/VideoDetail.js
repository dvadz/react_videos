import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div></div>;

  return (
    <div>
      <div className='ui segment'>
        <h4 className='header'>{video.snippet.title}</h4>
        <p className='description'>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
