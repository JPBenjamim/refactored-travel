import Navbar from "./components/Navbar"
import { Insight } from "./components/Insight";
import { Banner } from "./components/Banner";

import styles from "./App.module.css";

import "./global.css";

function App() {
  
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Banner />
        <Insight />
      </div>
    </>
  )
}

export default App;
