import axios from 'axios'
import { objectToQueryString } from '../utils/utils'

export const host = 'https://us-central1-notes-c0c9b.cloudfunctions.net/note'
export const apiHost = `${host}/`

const instance = axios.create({
	baseURL: apiHost,
})

const api = {
	get: async (url, params) => {
		const options = {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		}

		if (params) {
			// eslint-disable-next-line no-param-reassign
			url += `?${objectToQueryString(params)}`
		}

		try {
			const response = await instance.get(`${url}`, options)

			return response.data
		} catch (e) {
			console.log(e)
		}
	},
	post: async (url, data, config) => {
		let options = {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		}

		if (config) {
			options = { ...options, ...config }
		}

		try {
			const response = await instance.post(
				`${url}`,
				JSON.stringify(data),
				options
			)
			return response.data
		} catch (e) {
			console.log(e)
		}
	},
}

export default api
