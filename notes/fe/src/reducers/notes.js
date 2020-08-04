import { Notes } from '../constants/actionTypes'
// import { toast } from 'react-toastify'

const initialState = {
	currentNotes: null,
	initialized: false,
	loading: false,
}

// const notifyError = (err) =>
// 	toast.error(err.message, {
// 		position: 'top-right',
// 		autoClose: 5000,
// 		hideProgressBar: false,
// 		closeOnClick: true,
// 		pauseOnHover: true,
// 		draggable: true,
// 		progress: undefined,
// 	})

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
		default:
			return state
	}
}

export default notes
