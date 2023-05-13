import React, { useState } from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
import {
  RiArrowUpSLine,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/all";
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { AiOutlineMail,AiOutlineEye,AiOutlineEyeInvisible,AiOutlineWhatsApp } from "react-icons/all";
import { ArrayType } from "src/Types";

const ContactMe = (params: any) => {
  const [visible, SetVisible] = useState<Boolean>(false);
  const [show, setShow] = useState<Boolean>(false);
  const array: Array<ArrayType> = [
    {
      title: "Email",
      text: "chengyang9966@gmail.com",
      href: "mailto:chengyang9966@gmail.com",
      //  iconClass:'',
      icons: <AiOutlineMail />,
    },
    {
      title: "Contact Number",
      text: "+60108930879",
      href: "https://api.whatsapp.com/send?phone=+60108930879&text=Hello Cheng Yang I would like to connect with you",
      iconClass: "roundedFixedWhatsappBtn",
      icons: <AiOutlineWhatsApp />,
    },
    {
      title: "LinkedIn",
      text: "Cheng Yang Ong",
      href: "https://www.linkedin.com/in/chengyangong/",
      iconClass: "roundedFixedLinkedInBtn",
      icons: <AiFillLinkedin />,
    },
  ];
  const [value, Setvalue] = useState<string>("password");
  const OnChange = () => {
    !visible ? Setvalue("text") : Setvalue("password");
    SetVisible(!visible);
  };
  return (
    <div style={{ margin: "10rem 0px" }}>
      <h2 id="contact" className="portfolio-header">
        Contact Me
      </h2>
      <Card style={{ zIndex: 100, borderRadius: "10px" }}>
        <Card.Body
          contentEditable={false}
          style={{
            paddingBottom: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <Card.Title style={{ paddingLeft: "1rem" }}>Cheng Yang</Card.Title>
          <Form.Control
            style={{ paddingLeft: "1rem" }}
            type="text"
            defaultValue="Hi i am Cheng Yang"
            readOnly
            plaintext
          />
          <div onClick={() => setShow(!show)} className="contactMe-btn">
            <RiArrowUpSLine
              size={25}
              className={
                !show ? "arrow-icon-up white" : "arrow-icon-down white"
              }
            />
          </div>
          {show && (
            <Card.Footer>
              <Form.Control
                className="subTitle"
                type="text"
                defaultValue="Contact Me"
                readOnly
                plaintext
              />
            </Card.Footer>
          )}
        </Card.Body>
      </Card>
      <div>
        {show &&
          array.map((w) => {
            return (
              <Card
                key={w.title}
                style={{ zIndex: 100, borderRadius: "10px", marginTop: "1rem" }}
              >
                <Card.Body contentEditable={false}>
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      key={w.text + w.title}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            className={
                              w.iconClass ? w.iconClass : "roundedFixedBtn"
                            }
                            style={{ marginRight: "2rem" }}
                          >
                            {w.icons}
                          </div>
                          <div>
                            <Card.Text>{w.title}</Card.Text>
                            <Card.Text className="itemText">{w.text}</Card.Text>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <a href={w.href} target="_blank" rel="noreferrer">
                          <RiArrowUpSLine
                            size={25}
                            className={"arrow-icon-right itemText"}
                          />
                        </a>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
};
export default ContactMe;
