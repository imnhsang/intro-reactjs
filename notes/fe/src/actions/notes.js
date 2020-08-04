import { Notes } from '../constants/actionTypes'
import api from '../api/api'

export const initializedNotesData = (status) => ({
	type: Notes.INITIALIZED_NOTES_DATA,
	status,
})

export const requestNotesData = () => ({
	type: Notes.REQUEST_NOTES_DATA,
})

export const resetNotesData = () => ({
	type: Notes.RESET_NOTES_DATA,
})

export const receiveNotesData = (notes) => ({
	type: Notes.RECEIVE_NOTES_DATA,
	notes,
})

const fetchNotesData = (uid) => async (dispatch) => {
	dispatch(requestNotesData())
	try {
		const res = await api.get(`${uid}`)
		dispatch(receiveNotesData(res))
	} catch (error) {
		console.log(error)
	}
}

const shouldFetchNotesData = (state) => {
	const { initialized } = state
	if (!initialized) return true
	return false
}

export const fetchNotesDataIfNeeded = (uid) => (dispatch, getState) => {
	if (shouldFetchNotesData(getState().notes)) {
		return dispatch(fetchNotesData(uid))
	}
	return Promise.resolve()
}
