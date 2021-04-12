import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
// import store from './redux/store'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
// import { Provider } from './StoreContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>, document.getElementById('root')
);

// rerenderEntireTree(store.getState())

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });
