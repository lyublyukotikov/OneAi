import React from 'react';
import { Link } from 'react-router-dom';
import LegoPeople from "../assets/rezult-page-image.jpg"

const Rezult = () => {
  return (
    <div className="rezult__page">
      <div className='rezult__page__inner '>
        <div className='rezult__page__body'>
          <h2 className="visually-hidden">Rezult Picture</h2>
          <div style={{ backgroundImage: `url(${LegoPeople})` }}  className='rezult__page__image'></div>
          <button className='rezult__page__button button'>Save</button>
        </div>
        <div className='more_pics'>
          <Link className='more_pics__button button' to="/">More pics</Link>
        </div>
      </div>
    </div>
  );
};

export default Rezult;