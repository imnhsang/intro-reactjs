import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import * as Sentry from '@sentry/browser'

if (process.env.NODE_ENV === 'production') {
	Sentry.init({
		dsn: 'https://a49b62f44e2d43b7acc156796e0873ef@o429056.ingest.sentry.io/5375032',
	})
}
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
