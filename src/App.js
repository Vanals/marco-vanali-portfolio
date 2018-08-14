import React, { Component } from 'react';
import styles from "./styling/css/App.css"

class App extends Component {
  render() {
    return (
      <div className= {styles.nameTitleContainer} >
        <h1 className= {styles.name}>Marco Vanali</h1>
        <h2 classnbame={styles.title}>Web Developer</h2>
      </div>
    );
  }
}

export default App;
