import React from 'react'
import LoginForm from './presentational/Form.Login'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import { loginByFacebook } from '../../../actions/auth'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	justify-content: center;
	flex-direction: column;
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
const Line = styled.hr`
	left: 0;
	width: 100%;
	position: absolute;
	z-index: 1;
	margin: 0;
	border: none;
	height: 1px;
	background: #dadce0;
`
const TextLine = styled.span`
	font-size: 13px;
	display: flex;
	align-items: center;
	z-index: 2;
	background: #fff;
	color: #343a40;
	padding: 3px 24px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
const OtherSignWrapper = styled.div`
	position: relative;
	width: 380px;
	margin-top: 30px;
	margin-bottom: 30px;
`
const FacebookSignButton = styled.button`
	padding: 20px 18px;
	border-radius: 4px;
	background: #325a97;
	border: none;
	outline: none;
	cursor: pointer;
	opacity: 0.8;
	transition: opacity 0.3s;
	&:hover {
		opacity: 1;
	}
`
const FacebookIcon = styled.svg`
	width: 20px;
	height: 20px;
`
const Login = ({ location, loading, onLoginByFacebook }) => {
	const referer = location.state || '/'

	const handleLoginByFacebook = () => {
		onLoginByFacebook()
	}

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
				<>
					<LoginForm referer={referer}></LoginForm>
					<OtherSignWrapper>
						<Line></Line>
						<TextLine>or</TextLine>
					</OtherSignWrapper>
					<FacebookSignButton button='button' onClick={handleLoginByFacebook}>
						<FacebookIcon
							xmlns='http://www.w3.org/2000/svg'
							version='1.1'
							id='Capa_1'
							x='0px'
							y='0px'
							width='20px'
							height='20px'
							viewBox='0 0 96.124 96.123'
							style={{ enableBackground: 'new 0 0 96.124 96.123' }}
						>
							<g>
								<g>
									<path
										d='M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z'
										data-original='#000000'
										className='active-path'
										data-old_color='#000000'
										fill='#FFFFFF'
									/>
								</g>
								<script xmlns='' className='active-path' />
							</g>{' '}
						</FacebookIcon>
					</FacebookSignButton>
				</>
			)}
		</Wrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		loading: state.auth.loading,
	}
}

const mapDispatchToProps = (dispatch) => ({
	onLoginByFacebook: () => dispatch(loginByFacebook()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
