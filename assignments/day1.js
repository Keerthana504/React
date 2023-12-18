import logo from "./assets/Beyond.jpg";
import icon from "./assets/user-icon.jpg";
import "./day1.css";

const HeaderComp = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" className="img-logo"></img>
        <input className="search"></input>
        <img src={icon} alt="user-icon" className="img-icon"></img>
      </header>
    </div>
  );
};

export default HeaderComp;
