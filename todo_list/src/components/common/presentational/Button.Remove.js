import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	color: #cc9a9a;
	border: none;
	outline: none;
	background: none;
	font-size: 16px;
	cursor: pointer;
	&:hover {
		color: #af5b5e;
	}
`

const RemoveButton = ({id, onClick}) => (
	<Button id={id} onClick={onClick}>
		&#10005;
	</Button>
)

export default RemoveButton
