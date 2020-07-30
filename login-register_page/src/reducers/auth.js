import { Auth } from '../constants/actionTypes'
import { setAccountToStorage, clearStorage } from '../utils/utils'
// import { useHistory } from 'react-router-dom'

// const history = useHistory()

const initialState = {
	account: localStorage.getItem('account'),
	isAuthenticated: localStorage.getItem('account'),
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case Auth.LOGIN_SUCCESS:
			setAccountToStorage(action.email)
			return {
				...state,
				isAuthenticated: true,
			}
		case Auth.LOGIN_FAIL:
			return { ...state, account: null }
		case Auth.SIGN_OUT:
			clearStorage()
			return { account: null, isAuthenticated: false }
		default:
			return state
	}
}

export default auth
