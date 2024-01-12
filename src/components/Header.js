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

const onSearchRestaurant = (event) => {
  let searchKey = event.target.value;
  console.log(searchKey);
};

let signIn = "Login";
const onLogin = (event) => {
  console.log("loggedIn");
  signIn === "signIn" ? (signIn = "Logout") : (signIn = "signIn");
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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            width="20px"
            height="20px"
          >
            <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z" />
          </svg>
          <input
            placeholder="Search for Dishes and Restaurants"
            type="search"
            id=""
            name=""
            onChange={(event) => onSearchRestaurant(event)}
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
          <li onClick={(event) => onLogin(event)}>
            <a href="#">${signIn}</a>
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
          <li className="hideOnMobile" onClick={(event) => onLogin(event)}>
            <a href="#">
              <img
                width="50"
                height="50"
                src={USER_URL}
                alt="gender-neutral-user"
              />
              ${signIn}
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
