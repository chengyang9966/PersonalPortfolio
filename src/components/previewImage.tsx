import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
const previewImage=()=>{

return(
  <Container fluid>
    <Figure id="skill" style={{display:'flex'}}>
        <Container  style={{marginTop:'10rem'}}>
        <Row>
        <Col >
        <Figure style={{marginTop:'2rem'}} className="d-flex flex-column align-items-center" >
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/html.png'}
  />
  <Figure.Caption className="mt-5" bsPrefix={"HTML"} >
    HTML
  </Figure.Caption>
        </Figure>
        </Col>
        <Col>
        <Figure style={{marginTop:'2rem'}} className="d-flex flex-column align-items-center" >
        <Figure.Image
    width={130}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/css.png'}
  />
  <Figure.Caption style={{marginTop:'2rem'}} bsPrefix={"CSS"} >
  Cascading Style Sheets (CSS)
  </Figure.Caption>
        </Figure>
        </Col>
        <Col>
        <Figure className="d-flex flex-column align-items-center" >
        <Figure.Image
    width={180}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/js.png'}
  />
  <Figure.Caption className="mt-3" bsPrefix={"JS"} >
  Javascript (JS)
  </Figure.Caption>
        </Figure>
        </Col>
        </Row>

        <Row  className="mt-5" >
        <Col >
        <Figure style={{marginTop:'2rem'}} className="d-flex flex-column align-items-center" >
        <Figure.Image
    width={150}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/postgresql.svg'}
  />
  <Figure.Caption className="mt-5" bsPrefix={"HTML"} >
  PostgreSQL
  </Figure.Caption>
        </Figure>
        </Col>
  
        <Col className="mt-4" >
        <Figure className="d-flex flex-column align-items-center" >
        <Figure.Image
    width={150}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/netcore.png'}
  />
  <Figure.Caption className="mt-5" bsPrefix={"JS"} >
  .net core 3.1
  </Figure.Caption>
        </Figure>
        </Col>
        </Row>

        </Container>
  
</Figure>
  </Container>
)

}

export default previewImage