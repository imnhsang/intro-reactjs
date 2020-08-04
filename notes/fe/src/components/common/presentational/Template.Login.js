import React from 'react'
import styled from 'styled-components'
import LoginModal from '../../auth/Login'

const Wrapper = styled.div`
	height: 100vh;
`

const LoginTemplate = ({ location }) => {
	return (
		<Wrapper>
			<LoginModal location={location} />
		</Wrapper>
	)
}

export default LoginTemplate
