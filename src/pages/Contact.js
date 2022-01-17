import React from "react";
import Navigation from "../components/Navigation/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {

  const emailPP = () => alert("email copied");

  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">

        <div className="header"></div>

        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Bordeaux</span>
            </li>

            <li>
              <i className="fas fa-mobile-alt" ></i>
              <CopyToClipboard text="0615509921">
                <span className="clickInput" onClick={() =>alert('Téléphone copié !')}>
                    06 15 50 99 21
                </span>
              </CopyToClipboard>
            </li>

            <li>
                <i className="fas fa-envelope"></i>
                <CopyToClipboard text="stephane.noel@live.fr">
                    <span className="clickInput" onClick={emailPP}>
                        stephane.noel@live.fr
                        </span>
                </CopyToClipboard>
            </li>
          </ul>
        </div>
        
        <div className="socialNetwork">
          <ul>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>

            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>

            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>Codepen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Contact;
