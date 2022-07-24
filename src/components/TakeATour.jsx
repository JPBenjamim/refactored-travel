import styles from './TakeATour.module.css';

export function TakeATour(){
    return(
        <section className={styles.container}>
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <div className={styles.takeATour}>
                            <strong>
                                Take a Tour
                            </strong>
                            <h3>
                                Discover Our Travel Guideline
                            </h3>
                            <p>
                                For curious travelers who want to connect locally and go deeper into a place. Our Experiential Travel Guides highlight offbest and local experiences that help you.
                            </p>
                            <a href="#">
                                Start Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
