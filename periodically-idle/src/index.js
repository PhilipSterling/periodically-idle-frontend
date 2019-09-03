import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import store from './store'
import App from './App'
import reducer from './reducer'
const rootElement = document.getElementById('root')

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
