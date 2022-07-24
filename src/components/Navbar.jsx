import React from 'react'
import logo from '/src/assets/logojj.png'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={`container   ${styles.containerNavbar}`}>
      
        <img src={logo} alt="" className={styles.logo} />{' '}
        <button className= "btn btn-primary hover-shadow">
          
          <a className={styles.contact} href="#">            
          <i class="bi bi-whatsapp"> </i>Contato
          </a>
        </button>
     
    </div>
  )
}


