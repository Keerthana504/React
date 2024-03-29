import React from "react";
import ReactDOM from "react-dom/client";
import data from "./utils/imageGridCard.json";
import Header from "./components/Header";
import Banner from "./components/Banner";
import DishesCarousel from "./components/DishesCarousel";
import Main from "./components/Main";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <Banner></Banner>
      <DishesCarousel imgData={data}></DishesCarousel>
      <div className="divider"></div>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
