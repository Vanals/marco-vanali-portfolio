import React, { Component } from 'react';
import styles from "./styling/css/App.css"
import LandingPresentation from "./components/landingPresentation/LandingPresentation"

class App extends Component {
  render() {
    return (
      <div className={styles.container} >
        <LandingPresentation />
      </div>
    );
  }
}

export default App;
