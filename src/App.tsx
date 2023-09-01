import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "src/components/Loading";
import { useState, useEffect } from "react";
import Home from "./components/home";

function App() {

  const [loading, setLoading] = useState<Boolean>(true);

  var root = document.getElementById("root");
  useEffect(() => {
    if (root) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [root]);


  return loading ? (
    <Loading />
  ) : (
   <Home />
  );
}

export default App;
