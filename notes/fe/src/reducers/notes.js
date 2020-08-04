import { Notes } from '../constants/actionTypes'

const initialState = {
	currentNotes: null,
	initialized: false,
	loading: false,
}

const notes = (state = initialState, action) => {
	switch (action.type) {
		case Notes.INITIALIZED_NOTES_DATA:
			return { ...state, initialized: true }
		case Notes.RECEIVE_NOTES_DATA:
			return { ...state, currentNotes: action.notes, loading: false }
		case Notes.REQUEST_NOTES_DATA:
			return { ...state, loading: true }
		case Notes.RESET_NOTES_DATA:
			return { ...state, currentNotes: null, loading: false }
		case Notes.ADD_A_NOTE:
			return { ...state, currentNotes: [action.note, ...state.currentNotes] }
		default:
			return state
	}
}

export default notes
