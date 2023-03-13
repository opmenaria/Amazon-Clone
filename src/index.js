import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; //check
import { BrowserRouter } from "react-router-dom"
// import { StateProvider } from './components/StateProvider';
import { initialState } from './components/Reducer';
import { Provider } from 'react-redux';
import store from "./store/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <StateProvider > */}
      <App />
      {/* </StateProvider> */}
    </Provider>
  </BrowserRouter>
);
reportWebVitals();  
