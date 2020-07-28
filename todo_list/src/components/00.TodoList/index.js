import React, { useState } from 'react'
import styled from 'styled-components'
import TodoInput from './presentational/Input.Todo'
import Button from '../common/presentational/Button'
import TodoList from './presentational/List.Todo'
const Wrapper = styled.div`
	min-width: 230px;
	max-width: 550px;
	margin: auto;
`
const Text = styled.span`
	font-family: arial;
	font-size: 13px;
	color: #777;
`
const Title = styled.h1`
	padding: 0 16px;
	width: 100%;
	font-weight: 300;
	font-style: italic;
	text-align: center;
	color: rgba(175, 47, 47, 0.7);
`
const Footer = styled.div`
	width: 100%;
	display: flex;
	padding: 8px 16px 16px;
	justify-content: space-between;
`
function TodoListApp() {
	const [data, setData] = useState(
		JSON.parse(localStorage.getItem('data')) || []
	)

	const [todoNew, setTodoNew] = useState('')

	const itemsActive = data.filter((e) => e.isChecked !== true)
	const itemsCompleted = data.filter((e) => e.isChecked === true)

	const handleClearItemsCompleted = () => {
		localStorage.setItem('data', JSON.stringify(itemsActive))
		setData(itemsActive)
	}

	const handleRemoveItem = (event) => {
		console.log()
		localStorage.setItem(
			'data',
			JSON.stringify(data.filter((e) => e.id !== event.target.id))
		)
		setData(data.filter((e) => e.id !== event.target.id))
	}

	const handleOnchangeTodoNew = (e) => {
		setTodoNew(e.target.value)
	}

	const handleEnterTodoNew = (e) => {
		if (e.key === 'Enter') {
			setData([
				{ id: Date.now().toString(), name: todoNew, isChecked: false },
				...data,
			])
			setTodoNew('')
			localStorage.setItem('data', JSON.stringify(data))
		}
	}

	const handleCheck = (e) => {
		const index = data.findIndex((x) => x.id === e.target.id)
		console.log(index)
		
	}

	return (
		<Wrapper>
			<Title>todos</Title>
			<TodoInput
				todoText={todoNew}
				onChange={handleOnchangeTodoNew}
				onKeyPress={handleEnterTodoNew}
			/>
			<TodoList
				data={data}
				checkItem={handleCheck}
				removeItem={handleRemoveItem}
			/>
			<Footer>
				{data.length > 0 && (
					<Text>
						{itemsActive.length} {itemsActive.length === 1 ? 'item' : 'items'}{' '}
						left
					</Text>
				)}
				{itemsCompleted.length > 0 && (
					<Button name='Clear completed' onClick={handleClearItemsCompleted} />
				)}
			</Footer>
		</Wrapper>
	)
}

export default TodoListApp
