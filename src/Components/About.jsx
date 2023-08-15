import React from 'react';
import Info from './info'; // Import the Info component
import './About.css'; // Import your CSS file
import resume from './CV_Julien.pdf';
import {FaFileDownload, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const About = () => {
  return (
    <div className="About__container">
    <section className="about__section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">
        <FaQuoteLeft/> Without sport, I wouldn't have got this far. Budapest-Montreal-4138 miles <FaQuoteRight/>
      </span>
      <div className="about__container container__grid">
        <img src="/Photo-site/Photojulien.jpg" alt="About Me" className="about__img" />
        <div className="about__data">
          <Info /> {/* Render the Info component */}
          <p className="about__description">
            I am an industrial engineer passionate about technology, with a strong knowledge in blockchain, programming languages, IoT projects, ERP and project management. My enthusiasm lies in consulting, and I aim to bring my vision and expertise to businesses. I am a team player, and I am always looking for new challenges.
          </p>
          <a className="button button--flex" href={resume} download="CV_Julien.pdf">
            Download CV
            <i className='button__icon'><FaFileDownload/></i>
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
