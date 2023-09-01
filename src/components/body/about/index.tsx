import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋,I am,
              <br /> <span className="info-name">Cheng Yang Ong</span>.
              <br />
              <br />
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&pause=1000&color=154A62&center=true&width=435&lines=Self+Taught+Programmer;+Full+Stack+Developer;+Bring+dreams+to+life+!;3+Years+of+Experiences"
                alt="Typing SVG"
              />
         <br /> I have experience working with AWS Cloud Platform. 
        </div>
        <div className="about-photo">
          <img 
            src={process.env.PUBLIC_URL + "/coding.png" }
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;