import React from "react";

function Card({ name, category, location, cover, price, beds, bathroom }) {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img src={cover} alt={category} />
        <div className="card-body">
          <p>
            <i className="fa-solid fa-comments-dollar"></i> {price}/month
          </p>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{location}</p>
          <p>
            <i className="fa-solid fa-bed"></i> {beds} Beds{' '}
            <i className="fa-solid fa-toilet"></i> {bathroom} Bathroom
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
