import React from 'react'
import propTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const Spinner = () => <StyledSpinner />

const before = keyframes`
	from { -webkit-transform: scale(1,1); opacity: 1; }
	to { -webkit-transform: scale(1.5,1.5); opacity: 0; }
`

const after = keyframes`
	from { transform: scale(0.5,0.5); opacity: 0; }
	to { transform: scale(1,1); opacity: 1; }
`

const StyledSpinner = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	position: relative;
	opacity: 1;

	&:before,
	&:after {
		content: '';
		border: 1px rgba(255, 255, 255, 0.75) solid;
		border-radius: 50%;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
	}

	&:before {
		transform: scale(1, 1);
		opacity: 1;
		animation: ${before} 0.6s infinite linear;
	}

	&:after {
		transform: scale(0, 0);
		opacity: 0;
		animation: ${after} 0.6s infinite linear;
	}
`

Spinner.propTypes = {
	color: propTypes.string,
}

export default Spinner
