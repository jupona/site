import React from "react";
import "./TransparensiiSection.css";
import "./Cards.css";

function TransparensiiSection() {
  return (
    <div className="transparensii-container">
      <div className="video-container">
        <video src="/Video-site/video (2160p).mp4" autoPlay loop muted />
      </div>
      <div className="content">
        <h1>Transparensii</h1>
        <p>A blockchain-based sharing platform to redefine business</p>
        <div>
          <video
            src="/Video-site/DemoSiteTransparensii.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
}

export default TransparensiiSection;
