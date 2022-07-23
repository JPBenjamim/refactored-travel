import airbnb from "../assets/Airbnb.svg";
import booking from "../assets/Booking.svg";
import expedia from "../assets/Expedia.svg";
import kayak from "../assets/KAYAK.svg";
import trivago from "../assets/trivago.svg";
import star from "../assets/star.svg";
import core from "../assets/core.svg";
import correios from "../assets/correios.svg";

import styles from './FindTravel.module.css';

export function FindTravel() {
    return (
        <section className='container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <div className={styles.business}>
                        <ul>
                            <li>
                                <img src={airbnb} alt="Logo do Airbnb" />
                            </li>
                            <li>
                                <img src={kayak} alt="Logo do KAYAK" />
                            </li>
                            <li>
                                <img src={trivago} alt="Logo do Trivago" />
                            </li>
                            <li>
                                <img src={expedia} alt="Logo da Expedia" />
                            </li>
                            <li>
                                <img src={booking} alt="Logo do Booking.com" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className={styles.findTravel}>
                        <strong>
                            3 steps for the perfect trip
                        </strong>
                        <h3>
                            Find Travel Perfection
                        </h3>
                        <p>
                            Naturally head of the class when it comes to luxury travel planning, because we do more homework than anymore else
                        </p>
                    </div>
                </div>
                <div className="col-12">
                    <div className={styles.containerListCards}>
                        <ul>
                            <li>
                                <img src={correios} />
                                <h4>
                                    Tell us what you want to do
                                </h4>
                                <p>
                                    Fill out a 2-minutes questionnaire about how you like to travel
                                </p>
                            </li>
                            <li>
                                <img src={core} />
                                <h4>
                                    Share your travel preference
                                </h4>
                                <p>
                                    Fill out a 2-minutes questionnaire about how you like to travel
                                </p>
                            </li>
                            <li>
                                <img src={star} />
                                <h4>
                                    We’ll give you recommendations
                                </h4>
                                <p>
                                    Once you’re happy with your final plan, we handle everything for you
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}