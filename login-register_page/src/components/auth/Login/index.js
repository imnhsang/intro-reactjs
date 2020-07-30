import React from 'react'
import LoginForm from './presentational/Form.Login'

const Login = ({ location }) => {
	const referer = location.state || '/'
	return <LoginForm referer={referer}></LoginForm>
}

export default Login
