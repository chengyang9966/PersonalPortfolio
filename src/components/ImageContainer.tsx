import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { componentInterface } from "./Body";
import { redirectUrl } from "src/utils/redirect";

const ImageContainer = (props:componentInterface) => {
  const [index, setIndex] = useState(0);
  const intervalTime = 5000;
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const Carouselitem = [
    {
      path: "/TodoList.png",
      title: "Todo List",
      subTitle: "A list of tasks you need to complete and you want to do",
      interval: intervalTime,
    },
    {
      path: "/scratch_app.png",
      title: "Scratch App",
      subTitle: "note taking application support upload images",
      redirectUrl:'https://scratch-app.link',
      interval: intervalTime,
    },
    {
      path: "/swagger_api.png",
      title: "Swagger API",
      subTitle: "Basic Documentation for API using swagger",
      redirectUrl:'https://swagger.tester.fun/api-docs',
      interval: intervalTime,
    },
  ];
  return (
    <section className="imageContainer" style={{marginTop:'10rem'}}>
      <div id="portfolio" ref={props.newRef}>
        <h2 className="portfolio-header">Portfolio</h2>

        <Carousel
          slide={false}
          fade={false}
          className="portfolio-image"
          activeIndex={index}
          onSelect={handleSelect}
          nextLabel=""
          prevLabel=""
        >
          {Carouselitem.map((w, i) => (
            <Carousel.Item key={w.title} interval={w.interval}>
              <img
                className="d-block w-100 "
                src={process.env.PUBLIC_URL + w.path}
                alt={`${i + 1} 'slide'`}
                width={1200}
                height={630}
              />
              <Carousel.Caption>
                <h3 style={{cursor:'pointer'}} onClick={(e)=>w.redirectUrl&&redirectUrl(w.redirectUrl)}>{w.title}</h3>
                <p>{w.subTitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ImageContainer;
