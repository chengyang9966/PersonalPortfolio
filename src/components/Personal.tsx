import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { componentInterface } from "./Body";

const Personal = (props: componentInterface) => {
  return (
    <div className="personal-bg">
      <CardGroup id="about" ref={props.newRef}>
        <Card style={{ border: "none" }}>
          <Card.Body>
            <Card.Text className="about-info">
              Hello There ✋,I am,
              <br /> <span className="info-name">Cheng Yang Ong</span>.
              <br />
              <br />
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&pause=1000&color=154A62&center=true&width=435&lines=Self+Taught+Programmer;+Full+Stack+Developer;+Bring+dreams+to+life+!;3+Years+of+Experiences"
                alt="Typing SVG"
              />
            </Card.Text>
            <Card.Text>
              I have experience working with AWS Cloud Platform.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Personal;
