import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { signout } from '../../actions/auth'
import { fetchNotesDataIfNeeded } from '../../actions/notes'
import Notes from '../01.Notes'
import { getAccountFromStorage } from '../../utils/utils'
import { resetNotesData } from '../../actions/notes'
// import ButtonPublishLoading from '../common/presentational/Button.Loading'

const Wrapper = styled.div`
	// display: flex;
	// justify-content: center;
	// align-items: center;
`
const ButtonWrapper = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	right: 0;
	transform: translate(-20px, -20px);
	z-index: 2;
`
const SignoutButton = styled.button`
	margin-right: 8px;
	outline: none;
	cursor: pointer;
	font-weight: 700;
	background: rgba(175, 47, 47, 0.7);
	width: fit-content;
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
const ActionWrapper = styled.div`
	display: flex;
	flex-direction: column;
`
const Title = styled.h1`
	width: 100%;
	font-weight: 300;
	font-style: italic;
	text-align: center;
	color: rgba(175, 47, 47, 0.7);
`

const Home = ({ onSignout, onResetNotesData, onFetchData, notes,loading }) => {
	const history = useHistory()
	// const [loading, setLoading] = useState(false)
	const handleSignout = () => {
		onResetNotesData()
		onSignout()
		history.replace('login')
	}

	useEffect(() => {
		onFetchData(getAccountFromStorage())
	}, [onFetchData])

	return (
		<Wrapper>
			<Title>Welcome ^^</Title>
			<ButtonWrapper>
				<ActionWrapper>
					<SignoutButton onClick={handleSignout}>Sign out</SignoutButton>
				</ActionWrapper>
				{/* <ButtonPublishLoading name='Publish' type='button' loading={loading} 	color='#28a745'/> */}
			</ButtonWrapper>
			<Notes data={notes} loading={loading} />
		</Wrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		loading: state.notes.loading,
		notes: state.notes.currentNotes,
	}
}

const mapDispatchToProps = (dispatch) => ({
	onSignout: () => dispatch(signout()),
	onFetchData: (uid) => dispatch(fetchNotesDataIfNeeded(uid)),
	onResetNotesData: () => dispatch(resetNotesData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
