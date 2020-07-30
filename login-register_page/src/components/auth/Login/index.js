import React from 'react'
import { isAuthenticated } from '../../../utils/utils'
import { Redirect } from 'react-router-dom'

const Login = () => {
	if (isAuthenticated()) {
		return <Redirect to='/' />
	}

	return <div>Login page</div>
}

export default Login
