import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import App  from './components'
import appReducer from './reducers'
import asynMiddleware from 'redux-asyn'

let store=createStore(
        appReducer,
        compose(
            applyMiddleware(asynMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)