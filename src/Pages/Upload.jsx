import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Picture from "../assets/icons8-изображение-64.png";
import Camera from "../assets/icons8-камера-77.png";
import Girl from "../assets/card-image.jpg";
import Lego from "../assets/rezult-page-image.jpg";
import Arrow from "../assets/upload-arrow.png";


const Upload = () => {
  const [showLego, setShowLego] = useState(false);

  useEffect(() => {
    const toggleLego = () => {
      setShowLego(prevShowLego => !prevShowLego); 
    };

    const interval = setInterval(toggleLego, 2500); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="upload_page">
      <div className='upload_page__inner'>
        <div className='upload_page__exit'>
          <Link to="/" className='upload_page__button button'>
            <img height={"41px"}  src={Arrow} alt="" />
            Go back
          </Link>
        </div>
        <div className='upload_page__body'>
          <h2 className="visually-hidden">Choose photo</h2>
          <div className='upload_page__picture' style={{ backgroundImage: `url(${Girl})` }}>
            
            <img
              src={Lego}
              className={`lego_image ${showLego ? 'show' : ''}`}
              alt="Lego"
            />
          </div>
          <div className='choose_way'>
            <ul className='choose_way__list'>
            <Link to="/rezult" >
              <li className='choose_way__item'>
              
                <img width={"76px"} height={"58px"} className='choose_way__image' src={Picture} alt="" />
                <div className='choose_way__text'>Choose photo<br />from gallery</div>
               
              </li>
              </Link>
              <Link to="/rezult" >
              <li className='choose_way__item'>
                <img width={"76px"} height={"58px"} className='choose_way__image' src={Camera} alt="" />
                <div className='choose_way__text'>Take photo<br /> with camera</div>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
