import reactdom from "react-dom";
import App from "./App.js";
import {BrowserRouter} from "react-router-dom";

reactdom.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector("#root"));