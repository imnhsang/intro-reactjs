import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { isAuthenticated } from './utils/utils'
import { connect } from 'react-redux'

const PrivateRoute = ({ account, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			account ? (
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
		account: state.auth.account,
	}
}

export default connect(mapStateToProps)(PrivateRoute)
