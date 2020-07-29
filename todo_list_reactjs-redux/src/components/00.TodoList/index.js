import React, { useState } from 'react'
import styled from 'styled-components'
import TodoInput from './presentational/Input.Todo'
import Button from '../common/presentational/Button'
import TodoList from './presentational/List.Todo'
import { connect } from 'react-redux'
import {
	addTodo,
	updateTodo,
	removeTodo,
	clearCompletedTodo,
} from '../../actions/todos'

const Wrapper = styled.div`
	min-width: 230px;
	max-width: 550px;
	margin: auto;
`
const Text = styled.span`
	font-family: arial;
	font-size: 13px;
	color: #777;
	display: flex;
	align-items: center;
`
const EmptyText = styled.p`
	font-family: arial;
	font-size: 13px;
	color: #777;
	text-align: center;
	margin: 0;
	padding: 32px 16px 0 16px;
	width: 100%;
`
const Title = styled.h1`
	padding: 0 16px;
	width: 100%;
	font-weight: 300;
	font-style: italic;
	text-align: center;
	color: rgba(175, 47, 47, 0.7);
`
const Actions = styled.div`
	display: flex;
`
const Action = styled.div`
	padding: 5px;
`
const ActionWrapper = styled.div`
	width: 100%;
	display: flex;
	padding: 8px 16px 16px;
	justify-content: space-between;
`

function TodoListApp({
	currentTodos,
	onAddTodo,
	onCheckTodo,
	onRemoveTodo,
	onClearCompletedTodos,
}) {
	const [todoNew, setTodoNew] = useState('')
	const [typeFilter, setTypeFilter] = useState('all')

	const filteredData =
		typeFilter !== 'all'
			? typeFilter === 'active'
				? currentTodos.filter((e) => e.isChecked === false)
				: currentTodos.filter((e) => e.isChecked === true)
			: currentTodos

	const itemsActive = currentTodos.filter((e) => e.isChecked !== true)
	const itemsCompleted = currentTodos.filter((e) => e.isChecked === true)

	const handleClearItemsCompleted = () => {
		localStorage.setItem('data', JSON.stringify(itemsActive))
		onClearCompletedTodos()
	}

	const handleRemoveItem = (event) => {
		const newData = currentTodos.filter(
			(e) => e.id.toString() !== event.target.id
		)

		localStorage.setItem('data', JSON.stringify(newData))
		onRemoveTodo(event.target.id)
	}

	const handleOnchangeTodoNew = (e) => {
		setTodoNew(e.target.value)
	}

	const handleEnterTodoNew = (e) => {
		if (e.key === 'Enter' && todoNew.trim().length > 0) {
			const newData = [
				{ id: Date.now().toString(), name: todoNew, isChecked: false },
				...currentTodos,
			]

			localStorage.setItem('data', JSON.stringify(newData))
			onAddTodo(todoNew)

			setTodoNew('')
		}
	}

	const handleCheckTodo = (e) => {
		const indexEle = currentTodos.findIndex(
			(x) => x.id.toString() === e.target.id
		)
		let newData = [...currentTodos]
		newData[indexEle] = {
			...newData[indexEle],
			isChecked: !newData[indexEle].isChecked,
		}

		onCheckTodo(e.target.id)
		localStorage.setItem('data', JSON.stringify(newData))
	}

	const handleChangeFilter = (type) => {
		setTypeFilter(type)
	}

	return (
		<Wrapper>
			<Title>todos</Title>
			<TodoInput
				todoText={todoNew}
				onChange={handleOnchangeTodoNew}
				onKeyPress={handleEnterTodoNew}
			/>
			{filteredData.length === 0 && <EmptyText>No have todo</EmptyText>}
			<TodoList
				data={filteredData}
				checkItem={handleCheckTodo}
				removeItem={handleRemoveItem}
			/>
			{currentTodos.length > 0 && (
				<ActionWrapper>
					<Text>
						{itemsActive.length} {itemsActive.length < 2 ? 'item' : 'items'}{' '}
						left
					</Text>
					<Actions>
						<Action>
							<Button
								active={typeFilter === 'all' ? true : false}
								filter='true'
								name='All'
								onClick={() => handleChangeFilter('all')}
							/>
						</Action>
						<Action>
							<Button
								active={typeFilter === 'active' ? true : false}
								filter='true'
								name='Active'
								onClick={() => handleChangeFilter('active')}
							/>
						</Action>
						<Action>
							<Button
								active={typeFilter === 'completed' ? true : false}
								filter='true'
								name='Completed'
								onClick={() => handleChangeFilter('completed')}
							/>
						</Action>
					</Actions>
					<Button
						clear
						disabled={itemsCompleted.length > 0 ? false : true}
						name='Clear completed'
						onClick={handleClearItemsCompleted}
					/>
				</ActionWrapper>
			)}
		</Wrapper>
	)
}

TodoListApp.defaultProps = {
	currentFilter: 'all',
	currentTodos: [],
}

const mapStateToProps = (state) => {
	return {
		currentTodos: state.todos.currentTodos,
		// currentFilter: state.todos.typeFilter,
	}
}

const mapDispatchToProps = (dispatch) => ({
	onAddTodo: (name) => dispatch(addTodo(name)),
	onCheckTodo: (id) => dispatch(updateTodo(id)),
	onRemoveTodo: (id) => dispatch(removeTodo(id)),
	onClearCompletedTodos: () => dispatch(clearCompletedTodo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListApp)
