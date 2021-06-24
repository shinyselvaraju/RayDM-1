import {Route, useHistory} from "react-router-dom";
import {useState} from "react";
import Projects from "./components/projects"
import Home from "./components/home"
import Service from "./components/service"
import Contact from "./components/contactus"

function App() {

  const history = useHistory();

  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/home">
        <Home/>
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/work">
        <Projects />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
