import React from 'react'
import logo from '/src/assets/logojj.png'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={`container   ${styles.containerNavbar}`}>
      
        <img src={logo} alt="" className={styles.logo} />{' '}
        <button className= "btn btn-primary">
          
          <a className={styles.contact} href="#">            
            Contato
          </a>
        </button>
     
    </div>
  )
}

export default Navbar
