import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.button`
	display: flex;
	align-items: center;
	outline: none;
	cursor: pointer;
	font-weight: 700;
	background: ${(props) =>
		props.color ? props.color : 'rgba(175, 47, 47, 0.7)'};
	border: none;
	padding: 12px 24px;
	color: #fff;
	border-radius: 4px;
	width: fit-content;
	transition: transform 0.2s linear;
	&:hover {
		box-shadow: 4px 4px 0px #fff;
		transform: translate(-4px, -4px);
	}
`
const Text = styled.span`
	margin-right: ${(props) => props.loading === 'true' && '7px'};
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
	width: 15px;
	height: 15px;
`

const ButtonLoading = ({ name, loading, type, color }) => {
	return (
		<Wrapper color={color} type={type}>
			<Text loading={loading.toString()}>{name}</Text>
			{loading && (
				<Loading
					width='15'
					height='15'
					viewBox='0 0 15 15'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M2.25 7.5C2.25 4.66789 4.66789 2.25 7.5 2.25C10.3321 2.25 12.75 4.66789 12.75 7.5C12.75 7.70711 12.5821 7.875 12.375 7.875C12.1679 7.875 12 7.70711 12 7.5C12 5.08211 9.91789 3 7.5 3C5.08211 3 3 5.08211 3 7.5C3 7.70711 2.83211 7.875 2.625 7.875C2.41789 7.875 2.25 7.70711 2.25 7.5Z'
						fill='white'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M2.625 7.125C2.83211 7.125 3 7.29289 3 7.5C3 9.91789 5.08211 12 7.5 12C8.12891 12 9.00405 11.8263 9.80481 11.3895C10.5999 10.9558 11.3054 10.2728 11.6442 9.25641C11.7097 9.05994 11.9221 8.95375 12.1186 9.01924C12.3151 9.08474 12.4212 9.29711 12.3558 9.49359C11.9446 10.7272 11.0876 11.5442 10.1639 12.048C9.24595 12.5487 8.24609 12.75 7.5 12.75C4.66789 12.75 2.25 10.3321 2.25 7.5C2.25 7.29289 2.41789 7.125 2.625 7.125Z'
						fill='url(#paint0_linear)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear'
							x1='2.625'
							y1='7.5'
							x2='13.125'
							y2='7.5'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='white' stopOpacity='0.81' />
							<stop offset='1' stopColor='white' stopOpacity='0' />
						</linearGradient>
					</defs>
				</Loading>
			)}
		</Wrapper>
	)
}

export default ButtonLoading
