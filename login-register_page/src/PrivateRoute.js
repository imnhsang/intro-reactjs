import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { isAuthenticated } from './utils/utils'
import { connect } from 'react-redux'

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { referer: props.location },
					}}
				/>
			)
		}
	/>
)

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
	}
}

export default connect(mapStateToProps)(PrivateRoute)
