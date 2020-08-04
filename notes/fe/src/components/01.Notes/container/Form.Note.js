import React, { useState } from 'react'
import InputNote from '../presentation/Input.Note'
import TextareaNote from '../presentation/Textarea.Note'
import styled from 'styled-components'
import api from '../../../api/api'
import { toast } from 'react-toastify'
import { getAccountFromStorage } from '../../../utils/utils'
import { ToastContainer } from 'react-toastify'
import { addNote } from '../../../actions/notes'
import { connect } from 'react-redux'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	max-width: 450px;
	min-width: 230px;
	margin-bottom: 16px;
`

function FormNote({ onAddNote }) {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [loading, setLoading] = useState(false)

	const notifyError = (err) =>
		toast.error(err, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		})
	const notifySuccess = (err) =>
		toast.success(err, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		})

	const handleChangeTitle = (e) => {
		setTitle(e.target.value)
	}

	const handleChangeContent = (e) => {
		setContent(e.target.value)
	}

	const handleSaveNote = async (e) => {
		if (e.key === 'Enter') {
			if (!e.shiftKey) {
				if (title.trim().length !== 0 && content.trim().length !== 0) {
					setLoading(true)
					const body = {
						title,
						content,
						createdAt: Date.now(),
						uid: getAccountFromStorage(),
					}
					try {
						await api.post('', body)

						setLoading(false)
						notifySuccess('Created successfully!!!')
						onAddNote(body)

						setTitle('')
						setContent('')
					} catch (error) {
						setLoading(false)
						notifyError('Created failed!!!')
					}
				} else {
					notifyError('Title and Content are required.')
				}
			}
		}
	}

	return (
		<Wrapper>
			<ToastContainer />
			<InputNote
				loading={loading}
				title={title}
				handleChangeTitle={handleChangeTitle}
				handleSaveNote={handleSaveNote}
			/>
			<TextareaNote
				loading={loading}
				content={content}
				handleChangeContent={handleChangeContent}
				handleSaveNote={handleSaveNote}
			/>
		</Wrapper>
	)
}
const mapDispatchToProps = (dispatch) => ({
	onAddNote: (note) => dispatch(addNote(note)),
})

export default connect(null, mapDispatchToProps)(FormNote)
