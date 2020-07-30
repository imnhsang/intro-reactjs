import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { signout } from '../../actions/auth'
const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
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

const Home = ({ onSignout }) => {
	const history = useHistory()

	const handleSignout = () => {
		onSignout()
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

const mapDispatchToProps = (dispatch) => ({
	onSignout: () => dispatch(signout()),
})

export default connect(null, mapDispatchToProps)(Home)
