import React from 'react'
import { Link } from 'gatsby'

import Logo from './Logo'

//import { useNavigationItems } from '../hooks/useNavigationItems'
import useTailwindBreakpoint from '../hooks/useTailwindBreakpoint'

export default ({ siteTitle }) => {
	const breakpoint = useTailwindBreakpoint()
	console.log('breakpoint', breakpoint)

	return (
		<header>
			<div className="container mx-auto flex flex-wrap">
				<div className="w-full px-3">
					<Link className="block w-48" to="/">
						<Logo />
					</Link>
				</div>
			</div>
		</header>
	)
}
