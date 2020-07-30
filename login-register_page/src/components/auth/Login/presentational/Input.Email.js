import React from 'react'
import styled from 'styled-components'

const Input = styled.input``

const EmailInput = ({ onChange }) => {
	return <Input type='text' placeholder='Email' onChange={onChange}></Input>
}

export default EmailInput
