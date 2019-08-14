import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import classNames from 'classnames'

export default ({ ...props }) => {
	const mergedClassnames = classNames(props.className, 'hover:text-green-500')
	const Component = props.to ? StyledLink : StyledATag

	return (
		<Component {...props} className={mergedClassnames}>
			{props.children}
		</Component>
	)
}

const transition = 'color 0.125s ease-in-out'

const StyledLink = styled(Link)`
	transition: ${transition};
`

const StyledATag = styled.a`
	transition: ${transition};
`
