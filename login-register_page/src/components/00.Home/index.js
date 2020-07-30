import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { clearStorage } from '../../utils/utils'

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
  justify-content: center;
  align-items:center;
`
const SignoutButton = styled.button`
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
const ActionWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const Home = () => {
	const history = useHistory()

	const handleSignout = () => {
		clearStorage()
		history.replace('login')
	}

	return (
		<Wrapper>
			<ActionWrapper>
				<Title>Home</Title>
				<SignoutButton onClick={handleSignout}>Sign out</SignoutButton>
			</ActionWrapper>
		</Wrapper>
	)
}

export default Home
