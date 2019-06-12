import React from 'react'
import styled from 'styled-components'

export default ({ placeholder, disabled, onClick = null }) => (
	<Input
		placeholder={placeholder}
		isDisabled={disabled}
		disabled={disabled ? 'disabled' : null}
	/>
)

const Input = styled.input`
	opacity: ${props => (props.isDisabled ? 0.5 : 1)};
`
