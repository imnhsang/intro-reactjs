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
