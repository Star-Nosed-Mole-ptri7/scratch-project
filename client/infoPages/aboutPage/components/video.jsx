import React from "react";
import './video.css';

export default function Video() {
  return (
    <div className="container">
      <video loop autoPlay id="myVideo">
        <source
          src="https://cdn.videvo.net/videvo_files/video/free/2022-03/large_watermarked/220217_02_Recycling_4k_023_preview.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        <h1 className="overlay">Our Mission</h1>
    </div>
  );
}