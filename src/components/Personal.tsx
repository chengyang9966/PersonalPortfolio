import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

const Personal=()=>{

    return(
      <div className="personal-bg">
        <CardGroup id="about">
   
        <Card style={{border:'none'}}>
        <Card.Body>
          <Card.Title className='about-title'>About Me </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
          Hello! My name is Cheng Yang and I enjoy creating things that live on the internet.
          </Card.Text>
          <Card.Text>
           I am a Software Engineer specialised in frontend and backend development for complex scalable web apps 
           ie Hotel Management System (HMS)
           , Human Resources System (HRS).
           Currently, I'm an engineer at <a href='https://peoplex.ai/' target="_blank" rel="noreferrer" >PeopleX</a> focused on building Human Resources System.
          </Card.Text>
          <Card.Text>
          Here are a few technologies I've been working with recently:
          </Card.Text>
        </Card.Body>
      </Card>

        </CardGroup>
      </div>
    )
}

export default Personal