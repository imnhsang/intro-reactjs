import { Todos } from '../constants/actionTypes'

const initialState = {
	currentTodos: [],
}

const todos = (state = initialState, action) => {
	switch (action.type) {
		case Todos.ADD_TODO:
			return {
				...state,
				currentTodos: [
					{ id: action.id, name: action.name, isChecked: false },
					...state.currentTodos,
				],
			}
		case Todos.UPDATE_TODO:
			return {
				...state,
				currentTodos: state.currentTodos.map((todo) =>
					todo.id.toString() === action.id
						? { ...todo, isChecked: !todo.isChecked }
						: todo
				),
			}
		case Todos.REMOVE_TODO:
			return {
				...state,
				currentTodos: state.currentTodos.filter(
					(todo) => todo.id.toString() !== action.id
				),
			}
		case Todos.CLEAR_COMPELETED_TODOS:
			return {
				...state,
				currentTodos: state.currentTodos.filter(
					(todo) => todo.isChecked === false
				),
			}
		default:
			return state
	}
}

export default todos
