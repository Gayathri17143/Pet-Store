import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot-container">
      <div className="foot-item">
        <ul className="menu">
          <li>
            <a>
              <i class="fa-regular fa-phone">
                <div className="foot-text">+123 488 9652</div>
              </i>
              <i class="fa-regular fa-location-dot">
                <div className="foot-text">
                  25 West 21th Street,Miami FL,USA
                </div>
              </i>
              <i class="fa-regular fa-envelope">
                <div className="foot-text">info@rickyshop.com</div>
              </i>
              <i class="fa-regular fa-clock">
                <div className="foot-text">Mon-Fri:10:00-18:00 PM</div>
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="foot-item">
        <ul className="menu">
          <li>
            <a>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">About Us</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Our Team</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Maintance Mode</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Privacy Policy</div>
              </i>
            </a>
          </li>
        </ul>
      </div>

      <div className="foot-item">
        <ul className="icons">
          <li>
            <span>
              Follow Us:
              <a>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
              </a>
            </span>
          </li>
        </ul>

        <div className="foot-text1">
          We understand that keeping your pet happy and comfortable extends
          beyond services. Visit our shop to explore a wide range of
          high-quality pet supplies, including food, toys, bedding, and
          accessories.
        </div>
        <div className="foot-text2">
          © 2023 Ricky Theme. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
