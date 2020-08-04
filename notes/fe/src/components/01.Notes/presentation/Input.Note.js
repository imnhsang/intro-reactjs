import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin-bottom: 8px;
`
const Input = styled.input`
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 1px solid #dadce0;
	padding: 8px;
	color: #4d4d4d;
	font-size: 18px;
`

function InputNote({ title, handleChangeTitle, handleSaveNote, loading }) {
	return (
		<Wrapper>
			<Input
				disabled={loading}
				placeholder='Title'
				type='text'
				value={title}
				onChange={handleChangeTitle}
				onKeyPress={handleSaveNote}
			/>
		</Wrapper>
	)
}

export default InputNote
