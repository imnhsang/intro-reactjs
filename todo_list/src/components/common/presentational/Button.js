import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
	font-size: 13px;
	border: none;
	color: #777;
	background: none;
	cursor: pointer;
	padding: 0;
	outline: none;
	&:hover {
		text-decoration: underline;
	}
`

const Text = styled.span``

const GeneralButton = ({ name, onClick }) => (
	<Wrapper onClick={onClick}>
		<Text>{name}</Text>
	</Wrapper>
)

export default GeneralButton
