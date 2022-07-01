import "./home-footer.css";
import {IoLogoFacebook} from "react-icons/io5";
import {IoLogoLinkedin} from "react-icons/io5";
import {IoLogoWhatsapp} from "react-icons/io5";
import {IoLogoYoutube} from "react-icons/io5";
import {IoLogoInstagram} from "react-icons/io5";

const HomeFooter = () => {
  return (
    <div className="home-footer">
      <div className="footer-links">

        <div className="links">
          <a href="#link" id="top-link">For clients</a>
          <a href="#link">How to Hire</a>
          <a href="#link">Hire in Nigeria</a>
          <a href="#link">Project Catalog</a>
          <a href="#link">Talent Scout</a>
          <a href="#link">Talent Marketplace</a>
        </div>

        <div className="links">
        <a href="#link"id="top-link">For talent</a>
        <a href="#link">How to find work</a>
        <a href="#link">Find freelance jobs</a>
        </div>

        <div className="links">
          <a href="#link"id="top-link">Resources</a>
          <a href="#link">Help & Support</a>
          <a href="#link">Octave Talent Reviews</a>
          <a href="#link">Community</a>
        </div>

        <div className="links">
          <a href="#link" id="top-link">Company</a>
          <a href="#link">About us</a>
          <a href="#link">Careers</a>
          <a href="#link">Our impacts</a>
          <a href="#link">Contact us</a>
          <a href="#link">Trust & Safety</a>
        </div>

      </div>

      <div className="social-media">
          <p>Follow Us</p>
          <div className="social-media-icons">
              <a href="#facebook"> <IoLogoFacebook className="footer-icons"/></a>
              <a href="#linkedIn"> <IoLogoLinkedin className="footer-icons"/></a>
              <a href="#whatsapp"> <IoLogoWhatsapp className="footer-icons"/></a>
              <a href="#youtube"> <IoLogoYoutube className="footer-icons"/></a>
              <a href="#instagram"> <IoLogoInstagram className="footer-icons"/></a>
          </div>
      </div>

      <p className="copyright"> &copy; 2022 Octave Incorporation</p>
      
    </div>
  )
}

export default HomeFooter;