import React, { Component } from 'react';
import LittleStarStyles from '../../styling/css/LittleStar.css'
import LittleStar from './LittleStar'
import { TimelineMax, Power4, Bounce } from "gsap/all";

class Stars extends Component {

  constructor() {
    super()
    this.state = {
      // 1) add the ref in the state
      // 2) add the ref in the arrays used by greensock(currently 2)
      // 3) create a new star giving the correct ref number
      // 4) create a new ID style for that star, and place it where u want
      star1: React.createRef(),
      star2: React.createRef(),
      star3: React.createRef(),
      star4: React.createRef(),
      star5: React.createRef(),
      star6: React.createRef(),
      star7: React.createRef(),
      star8: React.createRef(),
      star9: React.createRef(),
      star10: React.createRef(),
      star11: React.createRef(),
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
    const starsRef = [
      this.state.star1.current,
      this.state.star2.current,
      this.state.star3.current,
      this.state.star4.current,
      this.state.star5.current,
      this.state.star6.current,
      this.state.star7.current,
      this.state.star8.current,
      this.state.star9.current,
      this.state.star10.current,
      this.state.star11.current,
    ]

    clearTl
            .set(starsRef, {autoAlpha: 0})
            ;

    return clearTl
  }

  enterStar = () => {
    let starTl= new TimelineMax();
    const starsRef = [
      this.state.star1.current,
      this.state.star2.current,
      this.state.star3.current,
      this.state.star4.current,
      this.state.star5.current,
      this.state.star6.current,
      this.state.star7.current,
      this.state.star8.current,
      this.state.star9.current,
      this.state.star10.current,
      this.state.star11.current,
    ]

    // SAME Y and X but you can decide when each of them stars to enter..? more or less.
    let yRandom =  Math.random() * (200 - 10) + 10
    let xRandom =  Math.random() * (400 - 10) + 10
    starTl.staggerTo(starsRef, 1, {autoAlpha:1, y: yRandom, x: xRandom}, 0.2)

    // starsRef.map(star =>{
    //   let yRandom =  Math.random() * (400 - 10) + 10
    //   let xRandom =  Math.random() * (400 - 10) + 10
    //   return starTl.to(star, 0.5, {autoAlpha: 1, y: yRandom, x: xRandom})
    // });


    // Doing like the following code all the stars would have moved at the same time.
    //  and using staggerFromTo, all at the some time multiple times(mapping)
    // let yRandom =  Math.random() * (200 - 10) + 10
    //  starTl
    //     .fromTo(starsRef, 1, {autoAlpha:0, y: yRandom}, {autoAlpha: 1, y:20})
    //     ;
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
          <LittleStar
          reference={this.state.star3}
          id={LittleStarStyles.starSvg3}/>
          <LittleStar
          reference={this.state.star4}
          id={LittleStarStyles.starSvg4}/>
          <LittleStar
          reference={this.state.star5}
          id={LittleStarStyles.starSvg5}/>
          <LittleStar
          reference={this.state.star6}
          id={LittleStarStyles.starSvg6}/>
          <LittleStar
          reference={this.state.star7}
          id={LittleStarStyles.starSvg7}/>
          <LittleStar
          reference={this.state.star8}
          id={LittleStarStyles.starSvg8}/>
          <LittleStar
          reference={this.state.star9}
          id={LittleStarStyles.starSvg9}/>
          <LittleStar
          reference={this.state.star10}
          id={LittleStarStyles.starSvg10}/>
          <LittleStar
          reference={this.state.star11}
          id={LittleStarStyles.starSvg11}/>
          {/* <LittleStar
          reference={this.state.star12}
          id={LittleStarStyles.starSvg12 }/>
          <LittleStar
          reference={this.state.star13}
          id={LittleStarStyles.starSvg13}/>
          <LittleStar
          reference={this.state.star14}
          id={LittleStarStyles.starSvg14}/>
          <LittleStar
          reference={this.state.star15}
          id={LittleStarStyles.starSvg15}/>
          <LittleStar
          reference={this.state.star16}
          id={LittleStarStyles.starSvg16}/>
          <LittleStar
          reference={this.state.star17}
          id={LittleStarStyles.starSvg17}/>
          <LittleStar
          reference={this.state.star18}
          id={LittleStarStyles.starSvg18}/>
          <LittleStar
          reference={this.state.star19}
          id={LittleStarStyles.starSvg19}/>
          <LittleStar
          reference={this.state.star20}
          id={LittleStarStyles.starSvg20}/>
          <LittleStar
          reference={this.state.star21}
          id={LittleStarStyles.starSvg21}/>
          <LittleStar
          reference={this.state.star22}
          id={LittleStarStyles.starSvg22}/> */}

        </div>
      );
    }
}


export default Stars;
