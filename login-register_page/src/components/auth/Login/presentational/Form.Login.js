import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect, useHistory } from 'react-router-dom'
import EmailInput from './Input.Email'
import PasswordInput from './Input.Password'

import { isAuthenticated } from '../../../../utils/utils'
import { setAccountToStorage } from '../../../../utils/utils'

const Wrapper = styled.div`
	width: 250px;
	padding: 48px 40px 36px;
	border-radius: 8px;
	border: 1px solid #dadce0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`
const ButtonSignin = styled.button`
	outline: none;
	cursor: pointer;
	font-weight: 700;
	background: #1a73e8;
	border: none;
	padding: 12px 24px;
	color: #fff;
  border-radius: 4px;
  transition: transform 0.2s linear;
	&:hover {
		box-shadow: 4px 4px 0px #fff;
		transform: translate(-4px, -4px);
	}
`
const Title = styled.span`
	width: 100%;
	text-align: center;
	margin-bottom: 30px;
`

const LoginModal = ({ referer }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const history = useHistory()

	const handleChangeEmail = (e) => {
		setError('')
		setEmail(e.target.value)
	}

	const handleChangePassword = (e) => {
		setError('')
		setPassword(e.target.value)
	}

	const handleLogin = () => {
		if (email === '' || password === '') {
			setError('Requied field')
		} else if (email === 'user@mail.com' && password === '123456') {
			setAccountToStorage(email)
			history.replace(referer)
		} else {
			setError('Username or password is incorrect')
		}
	}

	const handlePressEnter = (e) => {
		if (e.key === 'Enter') {
			handleLogin()
		}
	}

	if (isAuthenticated()) {
		return <Redirect to={referer} />
	}

	return (
		<Wrapper>
			<Title>Sign in</Title>
			<EmailInput
				label='Email'
				error={error}
				email={email}
				onChange={handleChangeEmail}
				onKeyPress={handlePressEnter}
			/>
			<PasswordInput
				label='Password'
				error={error}
				password={password}
				onChange={handleChangePassword}
				onKeyPress={handlePressEnter}
			/>
			<ButtonSignin onClick={handleLogin}>Sign in</ButtonSignin>
		</Wrapper>
	)
}

export default LoginModal
