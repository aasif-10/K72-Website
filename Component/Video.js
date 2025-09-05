import React from "react";

const Video = () => {
  return (
    <>
      <div className="video-bg text-white fixed top-0 left-0 h-screen  ">
        <video autoPlay muted loop src="/video.mp4"></video>
      </div>
    </>
  );
};

export default Video;
