// import React from 'react'
import { Auth } from '../constants/actionTypes'
import fire from '../config/firebase/fire'
import provider from '../config/firebase/facebook'

export const initializedAuthData = (status) => ({
	type: Auth.INITIALIZED_AUTH_DATA,
	status,
})

export const requestAuthData = () => ({
	type: Auth.REQUEST_AUTH_DATA,
})

export const requestSign = () => ({
	type: Auth.REQUEST_SIGN,
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
	dispatch(requestSign())
	fire
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => dispatch({ type: Auth.LOGIN_SUCCESS, user: user.user }))
		.catch((err) => dispatch({ type: Auth.LOGIN_FAIL, err }))
}

export const loginByFacebook = () => (dispatch) => {
	fire
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			const user = result.user
			return dispatch({ type: Auth.LOGIN_SUCCESS, user })
		})
		.catch((err) => dispatch({ type: Auth.LOGIN_FAIL, err }))
}

export const signout = () => (dispatch) => {
	fire
		.auth()
		.signOut()
		.then(() => dispatch({ type: Auth.SIGNOUT_SUCCESS }))
		.catch((err) => dispatch({ type: Auth.SIGNOUT_FAIL, err }))
}

export const signup = (email, password) => (dispatch) => {
	fire
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((user) => dispatch({ type: Auth.SIGNUP_SUCCESS, user }))
		.catch((err) => dispatch({ type: Auth.SIGNUP_FAIL, err }))
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
