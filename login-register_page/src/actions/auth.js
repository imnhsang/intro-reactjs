// import React from 'react'
import { Auth } from '../constants/actionTypes'
import fire from '../config/fire'

export const initializedAuthData = (status) => ({
	type: Auth.INITIALIZED_AUTH_DATA,
	status,
})

export const requestAuthData = () => ({
	type: Auth.REQUEST_AUTH_DATA,
})

export const receiveAuthData = (user) => ({
	type: Auth.RECEIVE_AUTH_DATA,
	user,
})

const fetchAuthData = () => (dispatch) => {
	dispatch(requestAuthData())
	try {
		fire.auth().onAuthStateChanged((user) => {
			dispatch(receiveAuthData(user))
			dispatch(initializedAuthData(true))
		})
	} catch (error) {
		console.log(error)
	}
}

export const login = (email, password) => (dispatch) => {
	fire
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => {
			return dispatch({
				type: Auth.LOGIN_SUCCESS,
				user,
			})
		})
		.catch((err) => {
			return dispatch({ type: Auth.LOGIN_FAIL, err })
		})
}

export const signout = () => (dispatch) => {
	fire
		.auth()
		.signOut()
		.then(() => {
			console.log('logout')
			return dispatch({
				type: Auth.SIGNOUT,
			})
		})
}

const shouldFetchAuthData = (state) => {
	const { initialized } = state
	if (!initialized) return true
	return false
}

export const fetchAuthDataIfNeeded = () => (dispatch, getState) => {
	if (shouldFetchAuthData(getState().auth)) {
		return dispatch(fetchAuthData())
	}
	return Promise.resolve()
}
