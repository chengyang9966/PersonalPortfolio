import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiOutlineMail,AiOutlineEye,AiOutlineEyeInvisible,AiOutlineWhatsApp } from "react-icons/all";

const ContactMe=(params:any) => {
  const [visible,SetVisible]=useState<Boolean>(false);
  const [value,Setvalue]=useState<string>('password');
  const OnChange=()=>{
    !visible?Setvalue('text'):Setvalue('password')

  SetVisible(!visible)
  
  }
    return(
      <div style={{marginTop:'10rem'}}>
      <h2 id='contact' className='portfolio-header'>Contact Me</h2>

        <Form className='ContactMe-div' > 
        <Form.Group as={Row} >
      <Form.Label column sm={1}></Form.Label>
    <Form.Label column sm={4}>
      Email
    </Form.Label>
    <Col sm={5}>
      <Form.Control defaultValue="chengyang9966@gmail.com" readOnly plaintext />
    </Col>
    <Col style={{display:'flex',alignItems:'center'}}>
      <a  href="mailto:chengyang9966@gmail.com"  target="_blank" rel="noreferrer">
    <AiOutlineMail className='icon-size' size={25} />
      </a>
    </Col>
  </Form.Group>
        <Form.Group as={Row} style={{marginTop:'20px'}} >
      <Form.Label column sm={1}></Form.Label>
    <Form.Label column sm={4}>
      Phone Number
    </Form.Label>
    <Col sm={5}>
      <Form.Control defaultValue="+60108930879" readOnly plaintext type={value}/>
    </Col>
    <Col>
     {visible?
     <>
      <AiOutlineEye size={25}  className='icon-size'onClick={OnChange}/>
      <a href="https://api.whatsapp.com/send?phone=+60108930879]&text=Hello Cheng Yang I would like to connect with you" target="_blank" rel="noreferrer">
      <AiOutlineWhatsApp size={22} className='whatsapp-icon' style={{marginLeft:10}}/>
      </a>
      </>
      
      :
      <AiOutlineEyeInvisible size={25} className='icon-size' onClick={OnChange}/>}
    </Col>
  </Form.Group>
   

        </Form>

        </div>
    )
}
export default ContactMe