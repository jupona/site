import React from "react";
import "./HeroSection.css";
import "./Cards";

function ScrollButton() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("Check");
    if (projectsSection) {
      const scrollOptions = {
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      };

      let start = window.pageYOffset;
      let end =
        projectsSection.getBoundingClientRect().top + window.pageYOffset;
      let currentTime = 0;
      const duration = 1000; // Transition duration in milliseconds

      const animateScroll = () => {
        currentTime += 16; // Roughly 60 FPS
        const ease = easeInOutQuad(currentTime, start, end - start, duration);
        window.scrollTo(0, ease);

        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      animateScroll();
    }
  };

  // Easing function for smooth scroll
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  return (
    <button
      onClick={scrollToProjects}
      className="btn1"
      buttonStyle="btn--outline"
      buttonSize="btn--large"
    >
      View Projects
    </button>
  );
}

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/Video-site/videoHome.mp4" autoPlay loop muted />
      <h1>Julien Pons</h1>
      <p>Consulting and IoT Projects</p>
      <div className="hero-btns">
        <ScrollButton />
        <a
          className="btn2"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          href="https://www.youtube.com/watch?v=ldw97e-JG4Y&t=6s"
          target="_blank"
          rel="noopener noreferrer"
        >
          WATCH Video <i className="far fa-play-circle" />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
