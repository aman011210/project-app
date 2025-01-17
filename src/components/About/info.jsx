import React from "react";

const info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award  about__icon"></i>

        <h3 className="about_title">Experience</h3>

        <span className="about_subtitle">Fresher</span>
      </div>

      <div className="about_box">
        <i className="bx bx-briefcase-alt about__icon "></i>

        <h3 className="about_title">Completed</h3>
         <span className="about_subtitle">48 + Projects</span>
      </div>

      <div className="about_box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about_title">Support</h3>

        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default info;
