// import React from 'react'
import { Auth } from '../constants/actionTypes'

export const login = (email, password, referer, notify) => {
	if (email === 'user@mail.com' && password === '123456') {
		return {
			type: Auth.LOGIN_SUCCESS,
			email,
			password,
			referer,
		}
	}
	return {
		type: Auth.LOGIN_FAIL,
		notify,
	}
}

export const signout = () => ({
	type: Auth.SIGN_OUT,
})
