import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import about from "../../assets/images/about.png";
import "./About.scss";

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="about__left">
          <LazyLoadImage
            alt="Again Faster About"
            placeholderSrc={about}
            src={about}
          />
        </div>
        <div className="about__right">
          <h1>Here’s what you need to know about our dumbbells</h1>
          <ul>
            <li>
              <span>/</span>
              <span>
                Texture design for better grip during strength and endurance
                work
              </span>
            </li>
            <li>
              <span>/</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </li>
            <li>
              <span>/</span>
              <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
