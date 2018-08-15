import React, { Component } from 'react';
import LittleStarStyles from '../../styling/css/LittleStar.css'
import LittleStar from './LittleStar'
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
    const starsRef = [ this.state.star1.current, this.state.star2.current ]

    clearTl
            .set(starsRef, {autoAlpha: 0})
            ;

    return clearTl
  }

  enterStar = () => {
    let starTl= new TimelineMax();
    const starsRef = [ this.state.star1.current, this.state.star2.current ]

    starTl
          .fromTo(starsRef, 1, {autoAlpha:0, y:0}, {autoAlpha: 1, y:20})
          ;

    return starTl
  }

    render() {
      return (
        <div>
          <LittleStar
          reference={this.state.star1}
          id={LittleStarStyles.starSvg1 }/>

          <LittleStar
          reference={this.state.star2}
          id={LittleStarStyles.starSvg2}/>

        </div>
      );
    }
}


export default Stars;
