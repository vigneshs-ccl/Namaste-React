import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://logowik.com/content/uploads/images/swiggy2340.jpg"
          className="logo"
        />
      </div>

      <div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Restaurant card
const RestaurantCard = ({ resName, cusine, rating, bannerImg }) => {
  return (
    <div className="card">
      <img src={bannerImg} alt="Restaurant" />
      <h2>{resName}</h2>
      <p>Cuisine: {cusine}</p>
      <p>Rating: {rating}⭐️</p>
    </div>
  );
};

const RestaurantApplication = () => {
  return (
    <>
      <Header />
      <div className="header-restaurants">Restaurants List</div>
      <div className="restaurant-container">
        <RestaurantCard
          resName="Restaurant"
          cusine="Indian"
          rating="4.5"
          bannerImg="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/54/46/dd/restaurant-dining-space.jpg?w=600&h=600&s=1"
        />

        <RestaurantCard
          resName="Restaurant 2"
          cusine="Chinese"
          rating="4"
          bannerImg="https://assets.indiaonline.in/cat-default/450/Restaurants-Cafe.webp"
        />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RestaurantApplication />);
