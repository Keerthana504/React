import chefLogo from "../../assets/chef-icon-logo.png";
import { CART_URL, USER_URL } from "../utils/constants";

const showSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
};

const hideSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};

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
                src={CART_URL}
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
                src={USER_URL}
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
export default Header;
