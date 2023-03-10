import React from "react";
import logo2 from "../assets/images/Logo2.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <img src={logo2} alt=""/>
        <ul> <p className="bottom-nav-title">Doormat Navigation</p>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/menu">Menu</Link></li>
          <li><Link className="link" to="/booking">Reservations</Link></li>
          <li><Link className="link" to="/order">Order Online</Link></li>
          <li><Link className="link" to="/login">Login</Link></li>
        </ul>
        <ul> <p className="bottom-nav-title">Contact</p>
            <li>Chicago,</li>
            <li>+1 123 456 7890</li>
            <li>email@example.com</li>
          </ul>
        <ul> <p className="bottom-nav-title">Social Media Links</p>
            <li><Link className="link" to="https://www.instagram.com">Instagram</Link></li>
            <li><Link className="link" to="https://www.facebook.com">Facebook</Link></li>
            <li><Link className="link" to="https://www.twitter.com">Twitter</Link></li>
        </ul>
      </footer>
  )
};

export default Footer;