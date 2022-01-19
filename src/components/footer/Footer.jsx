import React from "react";

import "./footer.scss";

import {
  RiMovie2Fill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content container">
        <div className="footer-content__list">
          <div className="footer-content__social">
            <div className="social-title">Social</div>
            <div className="social-icon">
              <a href="https://facebook.com">
                <RiFacebookBoxFill />
              </a>
              <a href="https://www.instagram.com">
                <RiInstagramFill />
              </a>
              <a href="https://youtube.com">
                <RiYoutubeFill />
              </a>
            </div>
          </div>
          <div className="footer-content__menu">
            <div className="menu-item">
              <div className="title">About</div>
              <div className="links">
                <Link to="/" className="link">
                  ZMovie Information
                </Link>
                <Link to="/" className="link">
                  History
                </Link>
              </div>
            </div>
            <div className="menu-item">
              <div className="title">Hot Type</div>
              <div className="links">
                <Link to="/" className="link">
                  Action
                </Link>
                <Link to="/" className="link">
                  Sci-fi
                </Link>
                <Link to="/" className="link">
                  Adventure
                </Link>
                <Link to="/" className="link">
                  Superheroes
                </Link>
                <Link to="/" className="link">
                  Horror
                </Link>
              </div>
            </div>
            <div className="menu-item">
              <div className="title">Policy</div>
              <div className="links">
                <Link to="/" className="link">
                  Term of Service
                </Link>
                <Link to="/" className="link">
                  Privacy
                </Link>
              </div>
            </div>
            <div className="menu-item">
              <div className="title">Customer support</div>
              <div className="links">
                <Link to="/" className="link">
                  Online support
                </Link>
                <Link to="/" className="link">
                  Online question
                </Link>
              </div>
            </div>
            <div className="menu-item">
              <div className="title">Contact</div>
              <div className="links">
                <Link to="/" className="link">
                  Hotline: 123-456-7890
                </Link>
                <div className="link email">
                  Email: <a>contact@zmovie.com</a>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <div className="title">Recruit</div>
              <div className="links">
                <Link to="/" className="link">
                  Job list
                </Link>
                <Link to="/" className="link">
                  Send your CV
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-content__coppyright">
            @2021, ZMovie. All rights reserved
          </div>
        </div>
        <div className="footer-content__logo">
          <div className="logo">
            <RiMovie2Fill />
            <Link to="/">ZMovie</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
