import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { clearStorage } from '../../utils/utils'
const SignoutButton = styled.button``

const Home = () => {
	const history = useHistory()

	const handleSignout = () => {
		clearStorage()
		history.replace('login')
	}

	return (
		<>
			<div>Home page</div>
			<SignoutButton onClick={handleSignout}>Sign out</SignoutButton>
		</>
	)
}

export default Home
