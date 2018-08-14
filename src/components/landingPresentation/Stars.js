import React, { Component } from 'react';
import styles from '../../styling/css/Stars.css'
import { TimelineMax } from "gsap/all";

class Stars extends Component {

  constructor() {
    super()
    this.state = {
      star1: React.createRef(),
      star2: React.createRef()
    }
  }

  componentDidMount() {
    this.startStarsAnimation()
  }

  startStarsAnimation = () => {
    const masterTl = new TimelineMax();
    masterTl
              .add(this.clearStage())
              .add(this.enterStar())
  }

  clearStage = () => {
    let clearTl= new TimelineMax();

    clearTl
            .set(this.state.star1.current, {autoAlpha: 0})
            .set(this.state.star2.current, {autoAlpha: 0})
            ;
    return clearTl
  }

  enterStar = () => {
    let starTl= new TimelineMax();
    starTl

          .fromTo(this.state.star1.current, 1, {autoAlpha:0, y:0}, {autoAlpha: 1, y:20})
          .fromTo(this.state.star2.current, 1, {autoAlpha:0, y:0}, {autoAlpha: 1, y:20})
    return starTl
  }

    render() {
      return (
        <div>
          <svg height="12" width="12" ref={this.state.star1} id={styles.starSvg1}>
            <circle cx="6" cy="6" r="3"  className={styles.circle} />
          </svg>

          <svg height="12" width="12" ref={this.state.star2} id={styles.starSvg2}>
            <circle cx="6" cy="6" r="3"  className={styles.circle} />
          </svg>
        </div>
      );
    }
}


export default Stars;
