import React from 'react'
import styled from 'styled-components'
import { milisecondToDatetime } from '../../../utils/utils'

const WrapperBorder = styled.div`
	padding: 16px;
`
const Wrapper = styled.div`
	max-width: 360px;
	min-width: 240px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	padding: 16px;
	color: #4d4d4d;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
`
const Title = styled.span`
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 2px;
`
const CreatedAt = styled.span`
	font-size: 15px;
	margin-bottom: 12px;
	font-style: italic;
`
const Content = styled.span`
	font-size: 13px;
	display: block;
	max-width: 360px;
	min-width: 240px;
	word-wrap: break-word;
`

function Note({ name, date, text }) {
	return (
		<WrapperBorder>
			<Wrapper>
				<Title>{name}</Title>
				<CreatedAt>{milisecondToDatetime(date)}</CreatedAt>
				<Content>{text}</Content>
			</Wrapper>
		</WrapperBorder>
	)
}

export default Note
