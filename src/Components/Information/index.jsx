import React from "react";
import "./styles.css";

const Information = () => {
  const address = "5001 McHenry Ave, Modesto, CA, United States, California";
  const phoneNumber = "+1 (209) 522-8400";
  const email = "admin@esagameroom.com";
  return (
    <div className="main-info-container">
      <div className="social-links center-center">
        <a href="https://www.facebook.com/p/Empire-Sportsmens-Association-100063684814879/">
          <img src="https://i.imgur.com/rzQBMwO.png" className="social-icon" />
        </a>
        <a href="https://x.com/s_sportmen">
          <img src="https://i.imgur.com/61XtYOS.png" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/empire_sportsmens_association/?hl=en">
          <img src="https://i.imgur.com/MWdFPcg.png" className="social-icon" />
        </a>
      </div>
      <div className="info-container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12625.39381305807!2d-120.995448!3d37.711498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809050b6ee98d8d5%3A0x5dac9f922113d9d6!2sEmpire%20Sportsmen%20Association!5e0!3m2!1sen!2sus!4v1718906633241!5m2!1sen!2sus"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="info-section">
          <div>{address}</div>
          <div>
            Have a question? Give us a call at{" "}
            <a href="tel:+12095228400" className="telephone">
              {phoneNumber}
            </a>
          </div>
          <div>For any additional information email us here: {email}</div>
        </div>
      </div>
    </div>
  );
};

export default Information;
