import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
	width: 100%;
	outline: none;
	padding: 16px;
	color: #4d4d4d;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
	font-size: 16px;
`
const GeneralInput = ({
	text,
	placeholder,
	onChange,
	value,
	onKeyPress,
}) => (
	<Input
		type={text}
		placeholder={placeholder}
		onChange={onChange}
		value={value}
		onKeyPress={onKeyPress}
	/>
)

export default GeneralInput
