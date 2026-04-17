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

const RestaurantApplication = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RestaurantApplication />);
