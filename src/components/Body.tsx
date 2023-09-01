import React from "react";
import 'src/App.css'
import { Jumbotron } from "react-bootstrap";
export interface componentInterface {
  newRef:React.RefObject<any>
}
const Body = (props:componentInterface) => {
    
  return (
    <Jumbotron id="home" fluid ref={props.newRef}>
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1 className='Name'>
              Cheng Yang<span className="dot"></span>
            </h1>
          </div>

          <div className="role">
            <div className="block"></div>
            <p className="description lead">Software engineer </p>
          </div>
        </div>

    </Jumbotron>
  );
};

export default Body;
