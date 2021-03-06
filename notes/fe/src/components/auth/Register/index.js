import React from 'react'
import SignupForm from './presentational/Form.SignUp'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100vh;
	justify-content: center;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const Loading = styled.svg`
	animation: ${rotate} 2s linear infinite;
	width: 50px;
	height: 50px;
`

const Register = ({ location, loading }) => {
	const referer = location.state || '/'

	return (
		<Wrapper>
			{loading ? (
				<Loading
					width='50'
					height='50'
					viewBox='0 0 50 50'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M7.5 25C7.5 15.5596 15.5596 7.5 25 7.5C34.4403 7.5 42.5 15.5596 42.5 25C42.5 25.6904 41.9403 26.25 41.25 26.25C40.5597 26.25 40 25.6904 40 25C40 16.9404 33.0596 10 25 10C16.9404 10 10 16.9404 10 25C10 25.6904 9.44037 26.25 8.75 26.25C8.05963 26.25 7.5 25.6904 7.5 25Z'
						fill='#1A73E8'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M8.75 23.75C9.44037 23.75 10 24.3096 10 25C10 33.0596 16.9404 40 25 40C27.0964 40 30.0135 39.421 32.6827 37.965C35.333 36.5193 37.6847 34.2427 38.814 30.8547C39.0323 30.1998 39.7403 29.8458 40.3953 30.0641C41.0503 30.2825 41.4043 30.9904 41.186 31.6453C39.8153 35.7573 36.9587 38.4807 33.8797 40.16C30.8198 41.829 27.487 42.5 25 42.5C15.5596 42.5 7.5 34.4403 7.5 25C7.5 24.3096 8.05963 23.75 8.75 23.75Z'
						fill='url(#paint0_linear)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear'
							x1='8.75'
							y1='25'
							x2='43.75'
							y2='25'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#1A73E8' stopOpacity='0.81' />
							<stop offset='1' stopColor='#1A73E8' stopOpacity='0' />
						</linearGradient>
					</defs>
				</Loading>
			) : (
				<SignupForm referer={referer}></SignupForm>
			)}
		</Wrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		loading: state.auth.loading,
	}
}

export default connect(mapStateToProps)(Register)
