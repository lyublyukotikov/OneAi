import React from 'react';
import Card from '../card/Card.jsx'; 

const Cards = () => {
  return (
    <section className="section container">
      <div className="section__body">
        <div className='cards'>
      <h2 className="visually-hidden ">People Cards</h2>
        <Card />
        <Card />
        </div>
      </div>
    </section>
  );
};

export default Cards;