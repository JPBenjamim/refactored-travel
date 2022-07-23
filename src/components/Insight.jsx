import { FaTaxi } from 'react-icons/fa';
import {BiWorld} from 'react-icons/bi'
import {TbCurrencyReal} from 'react-icons/tb';
import {MdPeopleAlt} from 'react-icons/md';

import styles from './Insight.module.css';

export function Insight(){
    return(
        <section className={`container ${styles.containerInsight}`}>
            <div className='Row'>
                <div className='col-12'>
                    <ul className={styles.insight}>
                        <li>
                            <FaTaxi size={32} />
                            <div>
                                <strong>
                                    24,000
                                </strong>
                                <span>
                                    Travel Experiences
                                </span>
                            </div>           
                        </li>
                        <li>
                            <BiWorld size={32} />
                            <div>
                                <strong>
                                    55+
                                </strong>
                                <span>
                                    Countries
                                </span>
                            </div>           
                        </li>
                        <li>
                            <TbCurrencyReal size={32} />
                            <div>
                                <strong>
                                    Best price
                                </strong>
                                <span>
                                    Guaranteed
                                </span>
                            </div>           
                        </li>
                        <li>
                            <MdPeopleAlt size={32} />
                            <div>
                                <strong>
                                    84 Million+
                                </strong>
                                <span>
                                    User per year
                                </span>
                            </div>           
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}