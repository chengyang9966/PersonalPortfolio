import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageContainer = () => {
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
      interval: intervalTime,
    },
    // {
    //   path: "/TodoList.png",
    //   title: "Todo List 3",
    //   subTitle: "A list of tasks you need to complete and you want to do",
    //   interval: intervalTime,
    // },
  ];
  return (
    <section className="imageContainer" style={{marginTop:'10rem'}}>
      <div id="portfolio">
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
              <Carousel.Caption className="dark">
                <h3>{w.title}</h3>
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
