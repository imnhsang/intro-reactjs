import { Todos } from '../constants/actionTypes'
// import { FilterType } from '../constants/constants'

const initialState = {
	currentTodos: [],
	// typeFilter: FilterType.ALL,
	initialed: false,
}

const todos = (state = initialState, action) => {
	switch (action.type) {
		case Todos.FAILED_REQUEST_TODOS_DATA:
			return { ...state }
		case Todos.INITIALIZED_TODOS:
			return {
				...state,
				initialed: action.status,
			}
		case Todos.RECEIVE_TODOS_DATA:
			return {
				...state,
				currentTodos: action.data,
			}
		case Todos.ADD_TODO:
			console.log(action)
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
