import Navbar from "./components/Navbar"
import { Insight } from "./components/Insight";
import { Banner } from "./components/Banner";
import { FindTravel } from "./components/FindTravel";

import styles from "./App.module.css";

import "./global.css";

function App() {
  
  return (
    <>
      <div className={styles.start}>
        <Navbar />
        <Banner />
      </div>
      <div className={styles.containerFindTravel}>
        <Insight />
        <FindTravel />
      </div>
    </>
  )
}

export default App;
