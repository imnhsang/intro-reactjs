export function setAccountToStorage(id) {
	localStorage.setItem('account', id)
}

export const getAccountFromStorage = () => {
	const account = localStorage.getItem('account')
	return account
}

export const isAuthenticated = () => {
	return getAccountFromStorage()
}

export const clearStorage = () => {
	localStorage.clear()
}

export function milisecondToDatetime(time) {
	const date = new Date(time)
	return `${date.toLocaleTimeString('en-GB')} ${date.toLocaleDateString(
		'en-GB'
	)}`
}

export function objectToQueryString(obj) {
	return Object.keys(obj)
		.map((key) => `${key}=${obj[key]}`)
		.join('&')
}