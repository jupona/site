import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards" id="cards">
      <h1 id="Check">Check out my projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/Photo-site/Transparensii-welcome.png"
              text="Transparensii a blockchain based sharing platform"
              label="Blockchain"
              path="/transparensii"
            />
            <CardItem
              src="/Photo-site/Dashboard2.png"
              text="Power Bi dashboard illustrating company performance indicators"
              label="Iot"
              path="/prisme"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/Photo-site/Smart contract C02.png"
              text="Smart contract for carbon emission tracking"
              label="Smart Contract"
              path="/smart-contract"
            />
            <CardItem
              src="/Photo-site/KnightsOftheDawn_Logo.png"
              text="My own Nft collection on the Polygon Blockchain"
              label="Nft"
              path="/NFT"
            />
            <CardItem
              src="/Photo-site/ERP-simulation.png"
              text="Made a ERP simulation on SAP"
              label="ERP"
              path="/ERP"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
