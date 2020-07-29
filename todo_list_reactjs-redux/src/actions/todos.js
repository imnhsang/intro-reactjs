import { Todos } from '../constants/actionTypes'

export const addTodo = (name) => ({
	type: Todos.ADD_TODO,
	id: Date.now(),
	name,
})

export const updateTodo = (id) => ({
	type: Todos.UPDATE_TODO,
	id,
})

export const removeTodo = (id) => ({
	type: Todos.REMOVE_TODO,
	id,
})

export const clearCompletedTodo = () => ({
	type: Todos.CLEAR_COMPELETED_TODOS,
})

export const receiveTodosData = (data) => ({
	type: Todos.RECEIVE_TODOS_DATA,
	data,
})

export const initializedTodos = (status) => ({
	type: Todos.INITIALIZED_TODOS,
	status: status,
})

const fetchTodosData = () => (dispatch) => {
	try {
		const data = JSON.parse(localStorage.getItem('data')) || []

		dispatch(receiveTodosData(data))
		dispatch(initializedTodos(true))
	} catch (error) {
		console.log(error)
	}
}

const shouldFetchTodosData = (state) => {
	const { initializedTodos } = state
	if (!initializedTodos) return true
	return false
}

export const fetchTodosDataIfNeeded = () => (dispatch, getState) => {
	if (shouldFetchTodosData(getState().todos)) {
		return dispatch(fetchTodosData())
	}
	return Promise.resolve()
}
