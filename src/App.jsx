import Navbar from "./components/Navbar"
import { Banner } from "./components/Banner";

import styles from "./App.module.css";

import "./global.css";

function App() {
  

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Banner />
      </div>
    </>
  )
}

export default App
