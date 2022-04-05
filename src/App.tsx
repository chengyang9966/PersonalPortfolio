import Header from "src/components/Header";
import Body from "src/components/Body";
import Personal from "src/components/Personal";
import ImageContainer from "src/components/ImageContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactMe from "src/components/ContactMe";
import Loading from "src/components/Loading";
import PreviewImage from "src/components/previewImage";
import { Mode } from "src/Types";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState<Boolean>(true);
  var root = document.getElementById("root");
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  useEffect(() => {
    if (root) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [root]);

  var body = document.body;
  var html = document.documentElement;
  const [theme, setTheme] = useState(Mode.light);

  var height = 0;
  var h = 0;

  var initiateHeights = function () {
    height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    console.log("heights were initialised:", height, h);
  };

  initiateHeights();

  var resize = function (e: any) {
    var scrolled = Math.max(
      document.body.scrollTop,
      document.documentElement.scrollTop
    );
    height > 0
      ? (e[0].style.width = (scrolled / (height - h)) * 100 + "%")
      : (e.style.width = 0 + "%");
  };

  document.onscroll = function () {
    resize(document.getElementsByClassName("headerKey"));
  };

  window.onresize = function () {
    initiateHeights();
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className={theme}>
        <Header theme={setTheme} />
        <span className="headerKey" />
        <div
          data-spy="scroll"
          data-target="#navbar"
          data-offset="50"
          className="scrollspy-example"
          tabIndex={0}
        >
          <Body />

          <Personal />
          <PreviewImage />
          <ImageContainer />
          <ContactMe />
        </div>
      </div>
      {/* <FloatButton /> */}
      <div
        className="CopyRight"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p style={{ marginBottom: 0 }}>
          Copyright © 2021 Cheng Yang. All rights reserved.{" "}
        </p>
      </div>
    </>
  );
}

export default App;
