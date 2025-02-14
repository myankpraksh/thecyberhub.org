import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { hydrate, render } from "react-dom";

import App from "./App";
import "./index.css";
import store from "./app/store";

const rootElement = document.getElementById("root");

// For SEO
if (rootElement.hasChildNodes()) {
  hydrate(
    <>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </>,
    rootElement,
  );
} else {
  render(
    <>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </>,
    rootElement,
  );
}

// ReactDOM.createRoot(rootElement).render(
//     <>
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </BrowserRouter>
//     </>
// )
