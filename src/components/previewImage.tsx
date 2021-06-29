import React from 'react';
import Figure from 'react-bootstrap/Figure';
const previewImage=()=>{

return(
    <Figure id="skill" style={{display:'flex'}}>
        <div style={{marginTop:'10rem'}}>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/html.png'}
  />
 <Figure.Image
    width={130}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/css.png'}
  />
  <Figure.Image
    width={200}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/js.png'}
  />
   <Figure.Image
    width={150}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/postgresql.svg'}
  />
   <Figure.Image
    width={150}
    height={180}
    alt="171x180"
    style={{marginRight:100,marginLeft:100}}
    src={process.env.PUBLIC_URL+'/netcore.png'}
  />
        <div className="skillText" >
<Figure.Caption style={{marginLeft:100,marginRight:40}}>
    HTML
  </Figure.Caption>
 
  <Figure.Caption style={{marginLeft:100,marginRight:40}}>
  Cascading Style Sheets (CSS)
  </Figure.Caption>
  
    <Figure.Caption style={{marginLeft:120,marginRight:40}}>
  Javascript (JS)
  </Figure.Caption>
 
     <Figure.Caption style={{marginLeft:180,marginRight:40}}>
     PostgreSQL
  </Figure.Caption>
 
   <Figure.Caption style={{marginLeft:200,marginRight:40}}>
   .net core 3.1
  </Figure.Caption>
        </div>
        </div>
  
</Figure>
)

}

export default previewImage