import React from "react";
import ReactDOM from "react-dom/client";
import chefLogo from "./assets/chef-icon-logo.png";
import rating from "./assets/favorite-5785.png";
import footerImg from "./assets/aboutusMasala.png";
import bannerImg from "./assets/kisspng-milkshake-juice3.png";
import bannerImg2 from "./assets/Thali.png";
import data from "./imageGridCard.json";
import dataSet from "./restaurantsInfo.json";

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

const processImageData = (data) => {
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

const DishesCarousel = (props) => {
  let newImgList = processImageData(props.imgData);
  return (
    <section>
      {newImgList.map((id) => {
        <img src={id}></img>;
      })}
    </section>
  );
};

const RestaurantCard = (props) => {
  const info = props.data.info;
  const link = props.data.cta.link;
  console.log(info.cuisines);
  console.log("2", info);
  return (
    <section className="res-card" key={info.id}>
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

const resData = [
  {
    info: {
      id: "414835",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Khairatabad",
      areaName: "Khairatabad",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 59,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-23 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-khairatabad-hyderabad-414835",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "376914",
      name: "Theobroma",
      cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
      locality: "Central Zone",
      areaName: "Somajiguda & Khairtabad",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-23 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹159",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/theobroma-central-zone-somajiguda-and-khairtabad-hyderabad-376914",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "32129",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Himayath Nagar",
      areaName: "Himayath Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-23 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-himayath-nagar-hyderabad-32129",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "124165",
      name: "Starbucks Coffee",
      cloudinaryImageId: "258fe8a3577877fbfe064095ed1d9dc3",
      locality: "GVK1 Mall",
      areaName: "Banjara Hills",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.3,
      parentId: "195515",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 57,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-22 22:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹219",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/starbucks-coffee-gvk1-mall-banjara-hills-hyderabad-124165",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "74979",
      name: "Ohri's Cake Nation",
      cloudinaryImageId: "77ab0c8da09a193b8fa4694b591d3301",
      locality: "Basheerbagh",
      areaName: "Basheerbagh",
      costForTwo: "₹450 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.4,
      veg: true,
      parentId: "233127",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-22 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ohris-cake-nation-basheerbagh-hyderabad-74979",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4138",
      name: "Grand Hotel",
      cloudinaryImageId: "g1arzw6qd7g9affkmgzk",
      locality: "Banjara Hills",
      areaName: "Abids",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese", "Tandoor", "Haleem"],
      avgRating: 4.3,
      parentId: "4001",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-22 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/grand-hotel-banjara-hills-abids-hyderabad-4138",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "153046",
      name: "Huber & Holly",
      cloudinaryImageId: "cujunjtk1tta0i8t9ffw",
      locality: "RAFSA TOWER",
      areaName: "Himayath Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Pizzas", "Beverages", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "6433",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-23 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/huber-and-holly-rafsa-tower-himayath-nagar-hyderabad-153046",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "355747",
      name: "Grameen Kulfi",
      cloudinaryImageId: "mwggy9gmdboqzi7gloms",
      locality: "KMIT",
      areaName: "Narayanguda",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-22 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/grameen-kulfi-kmit-narayanguda-hyderabad-355747",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "24613",
      name: "Domino's Pizza",
      cloudinaryImageId: "hbeqc0r6ifvqiuychft2",
      locality: "Stock Exchange Road",
      areaName: "Himayath Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-22 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-stock-exchange-road-himayath-nagar-hyderabad-24613",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "395225",
      name: "McDonald's Gourmet Burger Collection",
      cloudinaryImageId: "d3eewg9jbq6a94fzzc8k",
      locality: "Alto Trade Center",
      areaName: "Himayatnagar",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "10761",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-23 01:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-alto-trade-center-himayatnagar-hyderabad-395225",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "27665",
      name: "Pista House",
      cloudinaryImageId: "xrnrtevdf9w3pfvxlaei",
      locality: "Himayath Nagar",
      areaName: "Himayath Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Pizzas", "Snacks", "Desserts"],
      avgRating: 4.4,
      parentId: "1732",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-22 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pista-house-himayath-nagar-hyderabad-27665",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23707",
      name: "McDonald's",
      cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
      locality: "Himayath Nagar",
      areaName: "Himayath Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-23 01:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-himayath-nagar-hyderabad-23707",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  console.log(resData);
  return (
    <main className="body-container">
      <section className="search-res"></section>
      <section className="res-container">
        {dataSet.map((data) => (
          <RestaurantCard data={data}></RestaurantCard>
        ))}
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
      <DishesCarousel imgData={data}></DishesCarousel>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
