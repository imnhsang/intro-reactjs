import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect, useHistory } from 'react-router-dom'
import EmailInput from './Input.Email'
import PasswordInput from './Input.Password'

import { isAuthenticated } from '../../../../utils/utils'
import { setAccountToStorage } from '../../../../utils/utils'

const ButtonSignin = styled.button``

const LoginModal = ({ referer }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const history = useHistory()

	const handleChangeEmail = (e) => {
		setEmail(e.target.value)
	}

	const handleChangePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleLogin = () => {
		if (email === 'user@mail.com' && password === '123456') {
			setAccountToStorage(email)
			history.replace(referer)
		}
	}

	if (isAuthenticated()) {
		return <Redirect to={referer} />
	}

	return (
		<>
			<EmailInput email={email} onChange={handleChangeEmail} />
			<PasswordInput password={password} onChange={handleChangePassword} />
			<ButtonSignin onClick={handleLogin}>Sign in</ButtonSignin>
		</>
	)
}

export default LoginModal
