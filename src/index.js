import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <Suspense fallback={<Spinner/>}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
