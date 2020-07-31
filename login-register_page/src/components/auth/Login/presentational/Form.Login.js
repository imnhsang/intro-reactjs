import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../../../actions/auth'
import styled from 'styled-components'
import { Redirect, useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import EmailInput from './Input.Email'
import PasswordInput from './Input.Password'

const Wrapper = styled.div`
	width: 300px;
	padding: 48px 40px 36px;
	border-radius: 8px;
	border: 1px solid #dadce0;
	display: flex;
	flex-direction: column;
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
	width: fit-content;
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
const ActionWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`
const ButtonSignup = styled.button`
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;
	color: #1a73e8;
	font-weight: 700;
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
	} else if (
		!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/gm.test(values.email)
	) {
		errors.email = 'Invalid email address'
	}

	return errors
}

const LoginModal = ({ referer, account, onLogin }) => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate,
		onSubmit: (values) => {
			onLogin(values.email, values.password)
		},
	})

	const history = useHistory()
	const handleRedirectSignupPage = () => {
		history.replace('/register')
	}

	if (account) {
		return <Redirect to={referer} />
	}

	return (
		<Wrapper>
			<ToastContainer />
			<Title>Welcome</Title>
			<form
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-end',
				}}
				onSubmit={formik.handleSubmit}
			>
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
				<ActionWrapper>
					<ButtonSignup type='button' onClick={handleRedirectSignupPage}>
						Create account
					</ButtonSignup>
					<ButtonSignin type='submit'>Sign in</ButtonSignin>
				</ActionWrapper>
			</form>
		</Wrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.auth.account,
	}
}

const mapDispatchToProps = (dispatch) => ({
	onLogin: (email, password) => dispatch(login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
