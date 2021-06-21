import {Route, useHistory} from "react-router-dom";
import {useState} from "react";
import Home from "./components/home"

function App() {

  const history = useHistory();

  const [pageAlignment, setPageAlignment] = useState("right");

  function checkAlignment(){
    localStorage.getItem("align")?history.push("/home"):<></>;
  }

  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/home">
        <Home/>
      </Route>

      <Route path="/projects">
        <>project</>
      </Route>

      <Route path="/blog">
        <>blog</>
      </Route>

      <Route path="/contact">
        <>contact</>
      </Route>
    </div>
  );
}

export default App;
