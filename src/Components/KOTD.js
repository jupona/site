import React from "react";
import "./KOTD.css";

function KOTD() {
  return (
    <div className="KOTD__hero-container">
      <h1>My own Nft Collection</h1>
      <p>On Opensea</p>
      <div className="diagram-container">
        <div className="block">Smart Contract Creation</div>
        <div className="block">ERC-721 Standard Contract</div>
        <div className="block">Remix Framework Testing</div>
        <div className="block">Interaction with Metamask</div>
        <div className="block">Uploading Images to Pinata</div>
        <div className="block">Deployment on Polygon</div>
      </div>
    </div>
  );
}

export default KOTD;
