import React from 'react';
import {FaAward, FaBriefcase, FaHeadset} from 'react-icons/fa';

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
        <i className='about__icon'><FaAward/></i>
        <h3 className="about__title">Experience</h3>
        <li className="about__subtitle">Bachelor Industrial engineering</li>
        <li className="about__subtitle">Master Blockchain and IoT</li>
      </div>
      <div className="about__box">
      <i className='about__icon'><FaBriefcase/></i>
        <h3 className="about__title">Completed</h3>
        <li className="about__subtitle">10+ Projects</li>
        <li className="about__subtitle">2 internships</li>
      </div>
      <div className="about__box">
        <i className="about__icon"><FaHeadset/></i>
        <h3 className="about__title">Support</h3>
        <li className="about__subtitle">Consulting</li>
      </div>
    </div>
  );
}

export default Info;
