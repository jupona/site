import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Me</h2>
            <Link to="/about-me">Experiences</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="/contact-me">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a
              href="https://www.linkedin.com/in/julien-pons-71b89a217?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bxz6TdWQyTxarAtwlhD0AYw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Julien
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">Julien © 2023</small>
          <div class="social-icons">
            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/in/julien-pons-71b89a217?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bxz6TdWQyTxarAtwlhD0AYw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
