import React, { Component } from 'react';
import styles from '../../styling/css/LandingPresentation.css'
import Stars from "./Stars"

class LandingPresentation extends Component {

  render() {
    return (
      <section className={styles.sectionContainer}>
        <Stars />
        <h1 className={styles.name}>Marco Vanali</h1>
      </section>
    );
  }
}

export default LandingPresentation;
