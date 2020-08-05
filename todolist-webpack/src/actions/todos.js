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
