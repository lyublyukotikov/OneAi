import React from 'react';
import { Link } from 'react-router-dom';
import imageGirl from "../../assets/card-image.jpg";

const Card = () => {
  return (
    <Link to="/Upload" className="card-link">
      <div className="card">
        <h2 className="visually-hidden">People Card</h2>
        <img width={"281px"} height={"281px"} className="card__image" alt='a girl'  src={imageGirl} />
        <div className="card__content">
          <h2 className="card__title">Lego</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;