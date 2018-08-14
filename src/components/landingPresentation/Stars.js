import React from 'react';
import styles from '../../styling/css/LandingPresentation.css'

const Stars = ({questionText}) => {
    return (
      <svg height="15" width="15" >
        <circle cx="3" cy="3" r="3" fill="white" className={styles.star}/>
        <circle cx="3" cy="3" r="3" fill="white" className={styles.star}/>
      </svg>

    );
}


export default Stars;
