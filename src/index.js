import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
//import App from './App';
import AppReduxSaga from "./AppReduxSaga";
import reportWebVitals from "./reportWebVitals";

// Redux imports:
import { Provider } from "react-redux";

// Import Config Function of App Store
import {
  createAppAsyncStore,
  //createAppStore,
} from "./store/config/storeConfig";

// We create the App Store
// let appStore = createAppStore();
let appAsyncStore = createAppAsyncStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
