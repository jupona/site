import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaLinkedin, FaTelegramPlane, FaPencilAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact__section" id="contact">
      <h2 className="section__GetInTouch">Get in touch</h2>
      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="contact__card-icon"><FaTelegramPlane/></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">ponsjulien1@outlook.fr</span>
              <a href="mailto:ponsjulien1@outlook.fr" className="contact__button">Write me <i><FaPencilAlt/></i></a>
            </div>
            <div className="contact__card">
              <i className='contact__card-icon'> <FaWhatsapp/> </i>
              <h3 className="contact__card-title">Number</h3>
              <span className="contact__card-data">(514)-602-2796</span>
              <a href="https://api.whatsapp.com/send?phone=5146022796&text=Hello," className="contact__button" target="_blank"
          rel="noopener noreferrer">Write me <i><FaPencilAlt/></i></a>
            </div>
            <div className="contact__card">
              <i className="contact__card-icon"><FaLinkedin/></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">Julien Pons</span>
              <a href="https://www.linkedin.com/in/julien-pons-71b89a217?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bxz6TdWQyTxarAtwlhD0AYw%3D%3D" className="contact__button" target="_blank"
          rel="noopener noreferrer">Write me <i><FaPencilAlt/></i></a>
            </div>
            <div className='contact__content'>
                <img src="/Photo-site/3459559.png"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
