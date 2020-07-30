import React from 'react'
import styled from 'styled-components'

const Input = styled.input``

const PasswordInput = ({ onChange }) => {
	return (
		<Input type='password' placeholder='Password' onChange={onChange}></Input>
	)
}

export default PasswordInput
