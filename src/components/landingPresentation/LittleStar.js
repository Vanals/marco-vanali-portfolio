import React from 'react';
import styles from '../../styling/css/LittleStar.css'

const LittleStar = ({starsState, reference, id}) => {
    return (
      <svg height="12" width="12" ref={reference} id={id}>
        <circle cx="6" cy="6" r="3"  className={styles.circle} />
      </svg>
    );
}



export default LittleStar;
