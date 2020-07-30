import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/00.Home'
import Login from './components/auth/Login'
import PrivateRoute from './PrivateRoute'
import Register from './components/auth/Register'

function App() {
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path='/' component={Home}></PrivateRoute>
				<Route exact path='/login' component={Login}></Route>
				<Route exact path='/register' component={Register}></Route>
				<Route exact path='*' component={Login}></Route>
			</Switch>
		</Router>
	)
}

export default App
