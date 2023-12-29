import footerImg from "../../assets/aboutusMasala.png";
import chefLogo from "../../assets/chef-icon-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <section className="company-logo">
          <a href="#">
            <img className="logo" src={chefLogo} alt="logo"></img>
            <span className="logo-text">Beyond Eats</span>
          </a>
          <section className="social">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section className="sec quick-links">
          <p className="main">Quick Links</p>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Careers & Team</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </section>
        <section className="sec details">
          <p className="main">Contact Us</p>
          <div className="contact-details">
            <ul>
              <li>
                <a href="">Partner With Us</a>
              </li>
              <li>
                <a href="">Ride With Us</a>
              </li>
              <li className="info">
                <span>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <span>
                  <a href="mailto:enquire@beyondeats.com">
                    enquire@beyondeats.com
                  </a>
                </span>
              </li>
              <li className="m-bottom info">
                <span className="m-right">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span>
                  1234 Avenue Street <br></br>
                  Park County, Hyderabad 500048<br></br> India
                </span>
              </li>
              <li className="info">
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span>
                  <a href="tel:+914442349990">+91 444 234 9990</a>
                  <br></br>
                  <a href="tel:+911234567890">+91 1234567890</a>
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="sec details">
          <p className="main">Locations</p>
          <ul>
            <li>
              <a>Hyderabad</a>
            </li>
            <li>
              <a>Chennai</a>
            </li>
            <li>
              <a>Bengaluru</a>
            </li>
            <li>
              <a>Kochi</a>
            </li>
            <li>
              <a>Mumbai</a>
            </li>
          </ul>
        </section>
      </div>
      {/* <span className="footer-img">
          <img src={footerImg} alt="Footer Image"></img>
        </span> */}
      <p className="copy-right">
        Copyright © 2024 Beyond Eats and Company Pvt. Ltd. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
