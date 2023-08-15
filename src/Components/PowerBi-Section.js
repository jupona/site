import React, { useEffect, useRef } from "react";
import "./PowerBi-Section.css";
import Result from "./Result-section";

function PowerBi() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const text = paragraphRef.current.textContent;
      paragraphRef.current.textContent = "";
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          paragraphRef.current.textContent += text.charAt(currentIndex);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // Adjust the typing speed here (lower values make it faster)

      return () => clearInterval(typingInterval);
    }
  }, []);

  return (
    <div className="powerbi-container">
      <video src="/Video-site/video (2160p).mp4" autoPlay loop muted />
      <section className="container">
        <h1 className="powerbi">Power BI</h1>
        <div className="typing-container">
          <p ref={paragraphRef}>
            Interactive dashboard with Power Bi to visualize the data of Mp
            Repro, a printing company based in Montreal. The goal was to analyze
            financial performance and locate costs in processes and departments.
          </p>
        </div>
        <div className="card">
          <div className="card-image car-2"></div>
          <h2>Technologies Used</h2>
          <ul>
            <li>
              <img
                id="Schema"
                src="/Photo-site/List of raw materials.png"
                alt="Raw Materials"
              />
            </li>
            <li>Excel for data analysis</li>
            <li>Power BI for data visualization</li>
            <li>Power Query for data extraction</li>
            <li>Power Pivot for data modeling</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PowerBi;
