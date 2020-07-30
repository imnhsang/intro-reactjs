import React from 'react'
import styled from 'styled-components'
import LoginForm from '../../auth/Login'

const Wrapper = styled.div`
	height: 100vh;
`

const LoginTemplate = ({ location }) => {
	return (
		<Wrapper>
			<LoginForm location={location} />
		</Wrapper>
	)
}

export default LoginTemplate
