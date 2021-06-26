
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const ImageContainer=()=>{
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex:number) => {
      setIndex(selectedIndex)}
return(
  <div id="portfolio" > 
  <h2 className='portfolio-header'>Portfolio</h2>

    <Carousel className="portfolio-image" activeIndex={0} onSelect={handleSelect}  nextLabel="" prevLabel="">
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={process.env.PUBLIC_URL +'/TodoList.png'}
        alt="First slide"
      />
      <Carousel.Caption className="dark">
        <h3>Todo List</h3>
        <p>A list of tasks you need to complete and you want to do</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=282c34"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
)}

export default ImageContainer