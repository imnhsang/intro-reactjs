import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/00.Home'
import Login from './components/common/presentational/Template.Login'
import PrivateRoute from './PrivateRoute'
import Register from './components/auth/Register'
import { connect } from 'react-redux'
import { fetchAuthDataIfNeeded } from './actions/auth'

function App({ onFetchData}) {
	useEffect(() => {
		onFetchData()
	}, [onFetchData])

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



const mapDispatchToProps = (dispatch) => ({
	onFetchData: () => dispatch(fetchAuthDataIfNeeded()),
})

export default connect(null, mapDispatchToProps)(App)
