import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import classNames from 'classnames'

export default ({ ...props }) => {
	const mergedClassnames = classNames(props.className, 'font-bold')

	return (
		<StyledLink {...props} className={mergedClassnames}>
			{props.children}
		</StyledLink>
	)
}

const StyledLink = styled(Link)`
	transition: color 0.125s ease-in-out;

	&:hover {
		// TODO: Use a real value from tailwind
		color: red;
	}
`
