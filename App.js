import React from "react";
import ReactDOM from "react-dom/client";
import chefLogo from "./assets/chef-icon-logo.png";
import rating from "./assets/favorite-5785.png";
import footerImg from "./assets/aboutusMasala.png";
import bannerImg from "./assets/kisspng-milkshake-juice3.png";
import bannerImg2 from "./assets/Thali.png";
import data from "./imageGridCard.json";
import dataSet from "./restaurantsInfo.json";
import leftArr from "./assets/icons8-left-arrow-50.png";
import rightArr from "./assets/icons8-right-arrow-50.png";

const Header = () => {
  return (
    <header className="header">
      <section className="logo-container">
        <a href="#">
          <img className="logo" src={chefLogo} alt="logo"></img>
          <span className="logo-text">Beyond Eats</span>
        </a>
        <div className="divider-y"></div>
        <section className="search-container">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="rgba(2, 6, 12, 0.75)"
          >
            <path
              d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z"
              fill-opacity="0.92"
            ></path>
          </svg>
          <input
            placeholder="Search for Dishes and Restaurants"
            type="search"
            id=""
            name=""
          ></input>
        </section>
      </section>
      <nav className="nav-items">
        <ul className="sidebar">
          <li onClick={hideSidebar}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <path
                  d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <ul className="main-bar">
          <li className="hideOnMobile">
            <a href="#">Home</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">About</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Contact</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/dusk/64/shopping-cart--v1.png"
                alt="shopping-cart--v1"
              />
              Cart
            </a>
          </li>
          <li className="hideOnMobile">
            <a href="#">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/stickers/100/gender-neutral-user.png"
                alt="gender-neutral-user"
              />
              Login
            </a>
          </li>
          <li className="menu-button" onClick={showSidebar}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 -960 960 960"
                width="26"
              >
                <rect x="0" y="0" width="10" height="10" fill="#000000" />
                <path
                  d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const showSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
};

const hideSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};

const Banner = () => {
  return (
    <section className="banner">
      <article>
        Order Food Online! <br></br>add spice & chill to your plate.{" "}
        <span className="curve">
          <svg
            width="70%"
            height="90%"
            viewBox="0 0 78 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939"
              stroke="#F15700"
              stroke-width="2.0"
            ></path>
          </svg>
        </span>
      </article>
      <div>
        <img src={bannerImg} alt="lassi"></img>
        <img src={bannerImg2} alt="Food-platter" className="thali"></img>
      </div>
    </section>
  );
};

const processImageData = (data) => {
  let imgList = data.info;
  let link =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

  // console.log("1", imgList);
  const newImgList = imgList.map((item) => {
    let imgId;
    if (item.imageId) {
      imgId = item.imageId;
    }
    return link + imgId;
  });
  // console.log("2", newImgList);
  return newImgList;
};

const moveLeftImg = () => {};

const moveRightImg = () => {};

const DishesCarousel = (props) => {
  console.log(props);
  let newImgList = processImageData(props.imgData);
  console.log(newImgList);
  return (
    <section className="carousel-box">
      <div className="carousel-text">
        <p className="sub-heading">What's on your mind?</p>
        <p className="carousel-btn">
          <button disabled onClick={() => moveLeftImg()}>
            <img src={leftArr}></img>
          </button>
          <button>
            <img src={rightArr} onClick={() => moveRightImg()}></img>
          </button>
        </p>
      </div>
      <div className="carousel-img">
        {newImgList.map((id) => {
          return <img src={id} alt="carousel image"></img>;
        })}
      </div>
    </section>
  );
};

const RestaurantCard = (props) => {
  const info = props.data.info;
  const link = props.data.cta.link;
  return (
    <section className="res-card" id={info.id}>
      <a href={link} target="_blank">
        <img
          className="res-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            info.cloudinaryImageId
          }
          alt="dish"
        ></img>
      </a>
      <section className="res-desc">
        <div className="top">
          <p>{info.name}</p>
          <p>
            <img className="rating" src={rating} alt="rating"></img>
            <span>{info.avgRating} &#x2022;</span>
            <span className="m-left">{info.sla.slaString}</span>
          </p>
        </div>
        <div className="bottom">
          <p>{info.cuisines.join(", ")}</p>
          <p>{info.locality}</p>
        </div>
      </section>
    </section>
  );
};

const showMoreRes = () => {};

const Body = () => {
  return (
    <main className="body-container">
      <section className="filter-res">
        <p className="sub-heading">
          Restaurants with online food delivery in Hyderabad
        </p>
        <p></p>
      </section>
      <section className="res-container">
        {dataSet.map((data) => (
          <RestaurantCard data={data}></RestaurantCard>
        ))}
        <div className="show-more-section">
          <button className="show-more" onClick={() => showMoreRes()}>
            <p>Show More</p>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.6)"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.30875 4.27703C0.931854 4.60108 0.889014 5.16932 1.21307 5.54622L4.57534 9.45679C4.58439 9.46731 4.59351 9.47793 4.6027 9.48863C4.75431 9.66514 4.92366 9.86231 5.08944 10.0078C5.28433 10.1788 5.5905 10.385 6.01603 10.385C6.44156 10.385 6.74773 10.1788 6.94262 10.0078C7.1084 9.86232 7.27776 9.66515 7.42937 9.48865C7.43856 9.47795 7.44768 9.46733 7.45673 9.4568L10.7864 5.58418C11.1105 5.20729 11.0677 4.63905 10.6908 4.31499C10.3139 3.99093 9.74563 4.03377 9.42157 4.41066L6.09187 8.28328C6.06476 8.3148 6.0396 8.34406 6.01604 8.37135C5.99247 8.34406 5.96732 8.3148 5.94021 8.28328L2.57794 4.37271C2.25389 3.99581 1.68565 3.95297 1.30875 4.27703Z"
                fill="rgba(2, 6, 12, 0.6)"
                fill-opacity="0.92"
              ></path>
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

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
              <li>
                <span>
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <span>
                  <a href="mailto:enquire@beyondeats.com">
                    enquire@beyondeats.com
                  </a>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span>
                  1234 Avenue Street <br></br>
                  Park County, Hyderabad 500048<br></br> India
                </span>
              </li>
              <li>
                <span>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </span>
                <br></br>
                <span>
                  <a href="tel:+914442349990">+91 444 234 9990</a>
                  <a href="tel:+911234567890">+91 1234567890</a>
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="sec details">
          <p className="main">Locations</p>
          <ul>
            <li>Hyderabad</li>
            <li>Chennai</li>
            <li>Bengaluru</li>
            <li>Kochi</li>
            <li>Mumbai</li>
          </ul>
        </section>
      </div>
      <span className="footer-img">
        <img src={footerImg} alt="Footer Image"></img>
      </span>
      <p className="copy-right">
        Copyright © 2024 Beyond Eats and Company Pvt. Ltd. All Rights Reserved.
      </p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <Banner></Banner>
      <DishesCarousel imgData={data}></DishesCarousel>
      <div className="divider"></div>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
