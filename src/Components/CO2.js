import React from "react";
import "./CO2.css";

function CO2() {
  return (
    <div className="co2-container">
      <h1>Smart contract</h1>
      <p>Carbon emissions tracking with blockchain technology</p>
      <div className="box-container">
        <div className="box">
          <h4 className="box-text">Academic Research Project</h4>
          <p>
            The primary objective of my master's research project revolved
            around leveraging smart contract technology for the purpose of
            auditing carbon emissions.
          </p>
        </div>

        <div className="box">
          <h4 className="box-text">Why smart contracts?</h4>
          <ul>
            <li>Decentralized, transparent, and secure data storage</li>
            <li>
              Complete traceability of CO2 emissions, without the need for a
              trusted third party
            </li>
            <li>
              Improved automation and efficiency in tracking CO2 emissions
            </li>
          </ul>
        </div>

        <div className="box">
          <h4 className="box-text">How does it work?</h4>
          <p>
            The proposed model involves inputting specific parameters tailored
            to individual companies. Subsequently, the smart contract
            autonomously performs the required computations and generates
            emission-related results, which are then securely stored on the
            blockchain.
          </p>
        </div>

        {/* <div className="box"></div> */}
      </div>
      <div className="Bottom-page">
        <div className="box-container">
          <div className="box2">
            <h2>Results</h2>
            <p id="explained">
              The smart contract was implemented using Solidity and deployed on
              the Ethereum blockchain. The results were stored on the IPFS
              (InterPlanetary File System) network.
            </p>
          </div>

          <div className="box3">
            <h2>Sample</h2>
            <p>
              <img src="/Photo-site/Smart contract C02.png" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CO2;
