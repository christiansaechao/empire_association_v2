import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div>Must be 21 and up to play. Play responsibly.</div>
        <div>
          Gambling Problem? Call{" "}
          <a href="tel:+1234567890" className="telephone">
            1-800-GAMBLER
          </a>{" "}
          or visit{" "}
          <a href="www.problemgambling.ca.gov" className="gov-link">
            www.problemgambling.ca.gov
          </a>
        </div>
        <div className="footer-links">
          Must be 21 and up to play. Play responsibly.
        </div>
        <div>@2024 Empire Sportsmen Association. All Rights Reserved.</div>
        <div>
          Do not sell or share my personal information | Limit the use of my
          sensitive personal information | Contest Terms and Conditions
        </div>
      </div>
    </>
  );
};

export default Footer;
