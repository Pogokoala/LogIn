//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import App from "./app.js";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
     <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById('app')
);
