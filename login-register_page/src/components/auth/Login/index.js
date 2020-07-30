import React from 'react'
import LoginForm from './presentational/Form.Login'
import styled from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  height:100%;
  justify-content:center;
`

const Login = ({ location }) => {
	const referer = location.state || '/'

	return (
		<Wrapper>
			<LoginForm referer={referer}></LoginForm>
		</Wrapper>
	)
}

export default Login
