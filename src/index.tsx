import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import CityPage from "./components/cityPage/CityPage";
// import Counter from "./components/counter/Counter";
// import Sandwich from "./components/sandwich/Sandwich";
// import BtnTest from "./components/btnTest/BtnTest";
// import RandomActivity from "./components/randomActivity/RandomActivity";
// import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <App />
    {/* <Header />
    <RandomActivity />
    <Counter />
    <CityPage />
    <Sandwich />
    <BtnTest /> */}
    </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
