import React from 'react'
import styled from 'styled-components'
import { Redirect, useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

const validate = (values) => {
	const errors = {}
	if (!values.password) {
		errors.password = 'Required'
	} else if (values.password.length > 15) {
		errors.password = 'Must be 15 characters or less'
	}

	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}

	return errors
}

const LoginModal = ({ referer }) => {
	const history = useHistory()
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate,
		onSubmit: (values) => {
			if (values.email === 'user@mail.com' && values.password === '123456') {
				setAccountToStorage(values.email)
				history.replace(referer)
			} else {
				notify()
			}
		},
	})

	const notify = () =>
		toast.error('Username or password is incorrect', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		})

	if (isAuthenticated()) {
		return <Redirect to={referer} />
	}

	return (
		<Wrapper>
			<ToastContainer />
			<Title>Sign in</Title>
			<form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
				<EmailInput
					id='email'
					name='email'
					label='Email'
					error={formik.errors.email}
					email={formik.values.email}
					onChange={formik.handleChange}
				/>
				<PasswordInput
					id='password'
					name='password'
					label='Password'
					error={formik.errors.password}
					password={formik.values.password}
					onChange={formik.handleChange}
				/>
				<ButtonSignin type='submit'>Sign in</ButtonSignin>
			</form>
		</Wrapper>
	)
}

export default LoginModal
