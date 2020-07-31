import { Auth } from '../constants/actionTypes'
import { toast } from 'react-toastify'

const initialState = {
	account: null,
	initialized: false,
	loading: false,
}

const notifyError = (err) =>
	toast.error(err.message, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})

const auth = (state = initialState, action) => {
	switch (action.type) {
		case Auth.LOGIN_SUCCESS:
			return {
				...state,
				account: action.user,
			}
		case Auth.LOGIN_FAIL:
			notifyError(action.err)
			return { ...state, account: null }
		case Auth.SIGNOUT:
			return { ...state, account: null }
		case Auth.INITIALIZED_AUTH_DATA:
			console.log(state)
			return { ...state, initialized: true }
		case Auth.RECEIVE_AUTH_DATA:
			console.log(state)
			return { ...state, account: action.user, loading: false }
		case Auth.REQUEST_AUTH_DATA:
			console.log(state)
			return { ...state, loading: true }
		default:
			return state
	}
}

export default auth
