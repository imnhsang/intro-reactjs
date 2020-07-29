import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border: none;
	background: none;
	outline: none;
`
const OuterCircle = styled.div`
	border-radius: 50%;
	height: 22px;
	width: 22px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: solid 2px #4d4d4d;
	&:hover {
		background: #f5f5f5;
	}
`
const InnerCircle = styled.div`
	background: ${(props) => props.checked && '#28a745'};
	border-radius: 50%;
	height: 16px;
	width: 16px;
`

const CheckboxInput = ({ id, checked, onClick }) => (
	<Wrapper id={id} type='button' onClick={onClick}>
		<OuterCircle id={id}>
			<InnerCircle id={id} checked={checked} />
		</OuterCircle>
	</Wrapper>
)

export default CheckboxInput
