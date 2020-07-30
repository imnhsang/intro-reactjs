import React from 'react'
import styled from 'styled-components'
import TodoItem from './Item.Todo'

const Wrapper = styled.div`
	width: 100%;
	padding: 32px 16px 8px;
`

const TodoList = ({ data, checkItem, removeItem }) => (
	<Wrapper>
		{data.map((e) => (
			<TodoItem
				key={e.id}
				value={e}
				checkItem={checkItem}
				removeItem={removeItem}
			/>
		))}
	</Wrapper>
)

export default TodoList
