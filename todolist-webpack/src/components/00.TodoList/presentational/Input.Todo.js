import React from 'react'
import Input from '@components/common/presentational/Input'

const TodoInput = ({ todoText, onChange, onKeyPress }) => (
	<Input
		value={todoText}
		onChange={onChange}
		onKeyPress={onKeyPress}
		placeholder='What needs to be done?'
	/>
)

export default TodoInput
