import React, { useState } from 'react'
import styled from 'styled-components'
import Checkbox from '../../common/presentational/Input.Checkbox'
import Remove from '../../common/presentational/Button.Remove'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 8px 0;
`
const Left = styled.div`
	display: flex;
`
const Text = styled.span`
	font-size: 16px;
	display: inline-block;
	width: 480px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${(props) => (props.checked ? '#d9d9d9 ' : '#4d4d4d')};
	text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
	margin-left: 7px;
	margin: auto;
`

const TodoItem = ({ value, checkItem, removeItem }) => {
	const [hover, setHover] = useState(false)

	const handleMouseHover = (state) => {
		setHover(state)
	}

	return (
		<Wrapper
			onMouseEnter={() => handleMouseHover(true)}
			onMouseLeave={() => handleMouseHover(false)}
		>
			<Left>
				<Checkbox id={value.id} checked={value.isChecked} onClick={checkItem} />
				<Text checked={value.isChecked}>{value.name}</Text>
			</Left>
			{hover ? <Remove id={value.id} onClick={removeItem} /> : null}
		</Wrapper>
	)
}

export default TodoItem
