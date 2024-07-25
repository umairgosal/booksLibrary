import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-YRW3FTE6PF'
}

TagManager.initialize(tagManagerArgs)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>
)
