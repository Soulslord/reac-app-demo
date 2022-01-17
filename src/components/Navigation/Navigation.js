import React from "react";
import { NavLink } from "react-router-dom";
import BGatesImg from "./profil.jpg";

const Navigation = () => {
  return (
    <div className="sidebar">
     
      <div className="id">
        <div className="idContent">

          <div className="divImg"></div>
          <h3>Stephane Noel</h3>
        </div>
      </div>


      <div className="navigation">
        <ul>
          <li>
            <NavLink exact="true" to="/" activeclassname="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact="true" to="/competences" activeclassname="navActive">
              <i className="fas fa-briefcase"></i>
              <span>Competences</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact="true" to="/portfolio" activeclassname="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact="true" to="/contact" activeclassname="navActive">
            <i className="fas fa-address-book"></i>
            <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>


      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://fr.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-tabler icon-tabler-brand-linkedin"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#29C1ED"
                fill="#3a0ca3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-tabler icon-tabler-brand-github"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3a0ca3"
                fill="transparent"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-tabler icon-tabler-brand-twitter"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3a0ca3"
                fill="#3a0ca3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://codepen.io/accounts/signup/user/free"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-tabler icon-tabler-brand-codepen"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3a0ca3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
                <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                <line x1="3" y1="9" x2="3" y2="15" />
                <line x1="21" y1="9" x2="21" y2="15" />
                <line x1="12" y1="3" x2="12" y2="9" />
                <line x1="12" y1="15" x2="12" y2="21" />
              </svg>
            </a>
          </li>
        </ul>

        <div className="signature">
          <p>FromScratch - 2020</p>
        </div>

      </div>
    </div>
  );
};

export default Navigation;
