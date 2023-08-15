import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import "./Slider.css";
import Slider from "./Slider";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

function CardsTransparensii() {
  return (
    <div className="cards" id="cards">
      <div className="project-description">
        <h1>Project Description</h1>
        <p class="split-paragraph">
          The interface is developped on top of Ethereum blockchain in order to
          maintain decentralization at high level. Users can upload and share
          content immediately with no central entity. Increase trust in a more
          ergonomic way by adding partners with degrees of visibility.
        </p>
      </div>
      <h1>3 degrees of visibility</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/Photo-site/layer1-icon.png"
              text="Certifications and general informations"
              label="Public level"
            />
            <CardItem
              src="/Photo-site/Layer2-icon.png"
              text="Certifications, general informations and statistics"
              label="Transparent level"
            />
            <CardItem
              src="/Photo-site/layer3-icon.png"
              text="Certifications, general informations, statistics and partners"
              label="Private level"
            />
          </ul>
        </div>
      </div>

      <div className="how-it-works">
        <Slider />
      </div>

      <div className="objective">
        <div className="text-objective">
          <p>
            Transparenssi's main goal is to establish an ecosystem where
            companies become partners with customizable levels of visibility and
            data access <FaQuoteRight className="icon" />
          </p>
        </div>

        <img src="/Photo-site/bureauPartage copie.png" />
      </div>
    </div>
  );
}

export default CardsTransparensii;
