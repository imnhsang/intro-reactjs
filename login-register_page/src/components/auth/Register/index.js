import React from 'react'
import { isAuthenticated } from '../../../utils/utils'
import { Redirect } from 'react-router-dom'

const Register = () => {
	if (isAuthenticated()) {
		return <Redirect to='/' />
  }
  
	return <div>Register page</div>
}

export default Register
