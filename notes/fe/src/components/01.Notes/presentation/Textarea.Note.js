import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
const Textarea = styled.textarea`
	width: 100%;
	// max-width: 450px;
	min-height: 100px;
	padding: 0;
	border: none;
	outline: none;
	background: #f1f2f6;
	resize: vertical;
	padding: 8px;
	color: #4d4d4d;
	font-size: 13px;
`
function TextareaNote({
	content,
	handleChangeContent,
	handleSaveNote,
	loading,
}) {
	return (
		<Wrapper>
			<Textarea
				disabled={loading}
				placeholder='Note'
				value={content}
				onChange={handleChangeContent}
				onKeyPress={handleSaveNote}
			/>
		</Wrapper>
	)
}

export default TextareaNote
