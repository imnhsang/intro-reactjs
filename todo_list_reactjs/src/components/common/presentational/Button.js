import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
	font-size: 13px;
	border: none;
	color: ${(props) => (props.disabled ? 'transparent' : '#777')};
	background: ${(props) => (props.filter && props.active ? 'cc9a9a' : 'none')};
	cursor: ${(props) => (props.disabled ? 'none' : 'pointer')};
	padding: ${(props) => (props.filter ? '3px 7px' : '0')};
	outline: none;
	&:hover {
		text-decoration: ${(props) =>
			((props.filter && !props.active) || props.clear) && 'underline'};
	}
`

const Text = styled.span``

const GeneralButton = ({ name, active, disabled, filter, onClick, clear }) => (
	<Wrapper
		onClick={onClick}
		disabled={disabled}
		filter={filter}
		active={active}
		clear={clear}
	>
		<Text>{name}</Text>
	</Wrapper>
)

export default GeneralButton
