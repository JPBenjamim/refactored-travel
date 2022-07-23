import styles from "./Banner.module.css";

export function Banner() {
    return (
        <section className={`${styles.banner}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <strong className={styles.category}>
                            Book Now
                        </strong>
                        <h1 className={styles.bannerTitle}>
                            Let’s Enjoy
                            <span>
                                Your Trip With
                            </span>
                            {' '}<strong>Bluesky</strong>
                        </h1>
                        <p>
                            Thinking of taking a break from every day’s busy life?
                            Planning to go out of the country with your loved ones
                            to have some fun and quality time in a cost effective way?
                        </p>
                        <a href="#">Start Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}