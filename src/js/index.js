//import react into the bundle
import React from "react";
import "../styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import ReactDOM from "react-dom";


ReactDOM.render(
     <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById('app')
);
