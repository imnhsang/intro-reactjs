import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	margin-bottom: 30px;
	width: 100%;
`
const Input = styled.input`
	border-radius: 8px;
	padding: 13px 15px;
	border: 1px solid #dadce0;
	outline: none;
	color: #212529;
`
const Text = styled.span`
	font-size: 12px;
	margin-bottom: 8px;
	color: ${(props) => (props.error ? '#d93025' : '#343a40')};
`
const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`

const PasswordInput = ({ onChange, onKeyPress, label, error }) => {
	return (
		<Wrapper>
			<Col>
				{error ? <Text error={error}>{error}</Text> : <Text>{label}</Text>}
				<Input
					type='password'
					placeholder='Enter your password'
					onChange={onChange}
					onKeyPress={onKeyPress}
				></Input>
			</Col>
		</Wrapper>
	)
}

export default PasswordInput
