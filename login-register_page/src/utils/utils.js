export const getAccountFromStorage = () => {
	const account = localStorage.getItem('account')
	return account
}

export const isAuthenticated = () => {
	return getAccountFromStorage()
}
