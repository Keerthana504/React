import React from "react";
import ReactDOM from "react-dom/client";
import chefLogo from "./assets/chef-icon-logo.png";
import rating from "./assets/favorite-5785.png";
import footerImg from "./assets/aboutusMasala.png";
import bannerImg from "./assets/kisspng-milkshake-juice3.png";
import bannerImg2 from "./assets/Thali.png";
import data from "./imageGridCard.json";

const Header = () => {
  return (
    <header className="header">
      <section className="logo-container">
        <a href="#">
          <img className="logo" src={chefLogo} alt="logo"></img>
          <span className="logo-text">Beyond Eats</span>
        </a>
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
            <a href="#">Cart</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Login</a>
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
        <span className="curve"></span>
      </article>
      <div>
        <img src={bannerImg} alt="lassi"></img>
        <img src={bannerImg2} alt="Food-platter" className="thali"></img>
      </div>
    </section>
  );
};

const processImageData = () => {
  let imgList = data.info;
  console.log("1", imgList);
  const newImgList = imgList.map((item) => {
    let imgId;
    if (imgList[item].imageId) {
      imgId = imgList[item].imageId;
    }
    return link + imgId;
  });
  console.log("2", newImgList);
  return newImgList;
};

const DishesCarousel = () => {
  let newImgList = processImageData();
  return (
    <section>
      {newImgList.map((id) => {
        // <Image imgId={id}></Image>;
        <img src={id}></img>;
      })}
    </section>
  );
};

const RestaurantCard = (props) => {
  return (
    <section className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yrycuz88yy7lm2qbsdv6"
        alt="dish"
      ></img>
      <section className="res-desc">
        <div className="top">
          <p>{props.resName}</p>
          <p>
            <img className="rating" src={rating} alt="rating"></img>
            <span>4.6 &#x2022;</span> 30-35 mins
          </p>
        </div>
        <div className="bottom">
          <p>Biryani </p>
          <p>Somajiguda & Khairtabad</p>
        </div>
      </section>
    </section>
  );
};

const Body = () => {
  return (
    <main className="body-container">
      <section className="search-res"></section>
      <section className="res-container">
        <RestaurantCard resName="Spicy Venue"></RestaurantCard>
        <RestaurantCard resName="Ulavacharu"></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
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
          <p className="copy-right">© 2024 Beyond Eats and Company Pvt. Ltd</p>
        </section>
        <section className="details">
          <p className="main">Company</p>
          <p>
            <a href="">About</a>
          </p>
          <p>
            <a href="">Careers</a>
          </p>
          <p>
            <a href="">Team</a>
          </p>
        </section>
        <section className="details">
          <p className="main">Contact Us</p>
          <p>
            <a href="">Partner With Us</a>
          </p>
          <p>
            <a href="">Ride With Us</a>
          </p>
        </section>
        <section className="details">
          <p className="main">Locations</p>
          <p>Hyderabad</p>
          <p>Chennai</p>
          <p>Bengaluru</p>
          <p>Kochi</p>
          <p>Mumbai</p>
        </section>
      </div>
      <span className="footer-img">
        <img src={footerImg} alt="Footer Image"></img>
      </span>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <Banner></Banner>
      {/* <DishesCarousel></DishesCarousel> */}
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
