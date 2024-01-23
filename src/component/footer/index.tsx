import "./index.styles.scss";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="overlay">
        <div className="container">
          <div>
            <h2>Travel beyond your imagination, with our Travel Agency!</h2>
          </div>
          <div>
            <h4>Address</h4>
            <p>United Kingdom</p>
            <ul role="list" className="footer__links">
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaSquareInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <button>info@travel.com</button>
              <p>+ 01 483 593 284</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
