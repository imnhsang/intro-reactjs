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

const EmailInput = ({ id, name, onChange, label, error }) => {
	console.log(error)
	return (
		<Wrapper>
			<Col>
				{error ? <Text error={error}>{error}</Text> : <Text>{label}</Text>}
				<Input
					id={id}
					name={name}
					type='text'
					placeholder='Enter your email'
					onChange={onChange}
				></Input>
			</Col>
		</Wrapper>
	)
}

export default EmailInput
