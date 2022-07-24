import photo from '../assets/photo1.png'
import styles from './Trips.module.css'

import { useRef } from 'react';



export function Trips() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scroolleft += carousel.current.offsetWidth;

  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scroolleft -= carousel.current.offsetWidth;
  };


  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className='row'>
              <div className="col-4">
                <img src={photo} className="d-block w-100" alt="..." />
              </div>
              <div className="col-4">
                <img src={photo} className="d-block w-100" alt="..." />
              </div>
              <div className="col-4">
                <img src={photo} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className='row'>
              <div className="col-4">
                <img src={photo} className="d-block w-100" alt="..." />
              </div>
              <div className="col-4">
                <img src={photo} className="d-block w-100" alt="..." />
              </div>
              <div className="col-4">
                <img src={photo} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className='row'>
              <div className="col-4">
                <img src={photo} className="d-block w-100" alt="..." />
              </div>
              <div className="col-4">
                <img src={photo} className="d-block w-100" alt="..." />
              </div>
              <div className="col-4">
                <img src={photo} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  )
}

