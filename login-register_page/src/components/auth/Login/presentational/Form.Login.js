import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../../../actions/auth'
import styled from 'styled-components'
import { Redirect, useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import EmailInput from '../../../common/presentational/Input.Email'
import PasswordInput from '../../../common/presentational/Input.Password'
import ButtonSigninLoading from '../../../common/presentational/Button.Loading'

const Wrapper = styled.div`
	width: 300px;
	padding: 48px 40px 36px;
	border-radius: 8px;
	border: 1px solid #dadce0;
	display: flex;
	flex-direction: column;
`
const Title = styled.span`
	width: 100%;
	margin-bottom: 30px;
`
const ActionWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`
const ButtonCreateAccount = styled.button`
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
	const [loading, setLoading] = useState(false)
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate,
		onSubmit: (values) => {
			setLoading(true)
			onLogin(values.email, values.password)
			if (!account) {
				setTimeout(() => setLoading(false), 1500)
			}
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
			<Title>Log in your Account</Title>
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
					<ButtonCreateAccount type='button' onClick={handleRedirectSignupPage}>
						Create account
					</ButtonCreateAccount>
					<ButtonSigninLoading type='submit' name='Sign in' loading={loading} />
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
