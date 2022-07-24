import photo from '../assets/photo1.png'
import styles from './Trips.module.css'
import { useRef } from 'react';


const carousel =useRef(null);

const handleLeftClick = (e) => {
  e.preventDefault();
  carousel.current.scroolleft += carousel.current.offsetWidth;

};

const handleRightClick = (e) => {
  e.preventDefault();
  carousel.current.scroolleft -= carousel.current.offsetWidth;
};

export function Trips() {
  return (
   


    <section className={styles.container}>
      <div>
        <h1>Location</h1>
        <h2>Sugest location</h2>
        <p>Travel is my life. Since 2015, I’ve been traveling around the world nonstop. If you also travel, you’re in the right place!
        </p>
      </div>
      <div className={styles.carousel} ref={carousel}>
        <div className={styles.item}>
          <img src={photo} alt="" />
          <div className={styles.rated}>
            <div>
              <span className="type">Garmicsh</span>
              <span className="location">Garmicsh</span>
            </div>
            <div>
              <span className="price">R$ 00,00</span>
              <span className="star">***</span>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <img src={photo} alt="" />
          <div className={styles.rated}>
            <div>
              <span className="type">Garmicsh</span>
              <span className="location">Garmicsh</span>
            </div>
            <div>
              <span className="price">R$ 00,00</span>
              <span className="star">***</span>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <img src={photo} alt="" />
          <div className={styles.rated}>
            <div>
              <span className="type">Garmicsh</span>
              <span className="location">Garmicsh</span>
            </div>
            <div>
              <span className="price">R$ 00,00</span>
              <span className="star">***</span>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <img src={photo} alt="" />
          <div className={styles.rated}>
            <div>
              <span className="type">Garmicsh</span>
              <span className="location">Garmicsh</span>
            </div>
            <div>
              <span className="price">R$ 00,00</span>
              <span className="star">***</span>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <img src={photo} alt="" />
          <div className={styles.rated}>
            <div>
              <span className="type">Garmicsh</span>
              <span className="location">Garmicsh</span>
            </div>
            <div>
              <span className="price">R$ 00,00</span>
              <span className="star">***</span>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <img src={photo} alt="" />
          <div className={styles.rated}>
            <div>
              <span className="type">Garmicsh</span>
              <span className="location">Garmicsh</span>
            </div>
            <div>
              <span className="price">R$ 00,00</span>
              <span className="star">***</span>
            </div>
          </div>
        </div>
      </div>

    <div className="buttons">
      <button onClick={handleLeftClick}> + </button>
      <button onClick={handleRightClick}> - </button>
    </div>
    </section>


  )
}

