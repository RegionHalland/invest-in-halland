import React from 'react'
import styled from 'styled-components'

export default ({ title, onClick }) => (
	<Button onClick={onClick}>{title}</Button>
)

const Button = styled.button`
	background-color: ${props => (props.role === 'primary' ? 'red' : 'blue')};
`
