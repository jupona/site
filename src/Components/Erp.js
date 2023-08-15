import React from "react";
import "./Erp.css";

function Erp() {
  const MM = () => {
    return (
      <div className="diagram-box MM-box">
        <h2>SAP MM (Material Management)</h2>
        <ul>
          <li>Needs Calculation, Replenishment Planning</li>
          <li>Stock Movements</li>
          <li>Goods Receipt</li>
          <li>Invoice Verification</li>
          <li>Inventory Management</li>
        </ul>
      </div>
    );
  };

  const PP = () => {
    return (
      <div className="diagram-box PP-box">
        <h2> SAP PP (Production Planning)</h2>
        <ul>
          <li>Production Planning</li>
          <li>Material Requirements Planning (MRP I)</li>
          <li>
            Capacity Requirements Planning (CRP), Production Detail Planning
            (PDP), Manufacturing Resource Planning (MRP II)
          </li>
        </ul>
      </div>
    );
  };

  const SD = () => {
    return (
      <div className="diagram-box SD-box">
        <h2>SAP SD (Sales and Distribution)</h2>
        <ul>
          <li>Tender Management</li>
          <li>Offers</li>
          <li>Contracts</li>
          <li>Customer Orders</li>
          <li>Shipments and Deliveries</li>
        </ul>
      </div>
    );
  };

  const FI = () => {
    return (
      <div className="diagram-box FI-box">
        <h2>SAP FI (Financial)</h2>
        <ul>
          <li>General Ledger</li>
          <li>Accounts Receivable</li>
          <li>Accounts Payable</li>
          <li>Asset Accounting</li>
          <li>Cash Management and Bank Accounting</li>
        </ul>
      </div>
    );
  };

  const CO = () => {
    return (
      <div className="diagram-box CO-box">
        <h2>SAP CO (Controlling)</h2>
        <ul>
          <li>Overhead Orders</li>
          <li>Overhead Projects</li>
          <li>Information System</li>
          <li>Product Cost Controlling</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="ERP__hero-container">
      <h1>SAP simulation</h1>
      <p>Learned how to use five major modules of SAP </p>

      <div className="chart-container">
        <div className="diagramme">
          <MM />
          <div className="diagram-line"></div>
          <PP />
          <div className="diagram-line"></div>
          <SD />
          <div className="diagram-line"></div>
          <FI />
          <div className="diagram-line"></div>
          <CO />
        </div>
      </div>
    </div>
  );
}

export default Erp;
