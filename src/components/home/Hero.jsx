import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import hero from "../../assets/images/hero.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div className="hero__left">
          <h1>Rubber Hex Dumbbells</h1>
          <p className="hero__left__c1">
            Again Faster® Rubber Hex Dumbbells offer one of the most effective
            ways to add variance to any training program. Functional dumbbell
            movements cultivate stability, coordination and strength in ways
            that cannot be achieved using a barbell. Lighter dumbbells are great
            tools for accommodating athletes with an injury or those not yet
            comfortable with a bar. Whether you are making your first equipment
            purchase or looking to expand your gym's capabilities, making
            dumbbells a priority will take your training to the next level.
          </p>
          <p className="hero__left__c2">
            Need a way to organize your weights? Check out some of our Storage
            Options.
          </p>
        </div>
        <div className="hero__right">
          <LazyLoadImage alt="Again Faster" placeholderSrc={hero} src={hero} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
