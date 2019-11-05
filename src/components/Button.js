import React from 'react'
import { Link } from 'gatsby'

export default ({ title, to }) => (
	<Link
		className="px-4 py-3 md:px-5 md:py-4 border-4 border-green-500 inline-flex items-center"
		to={to}
	>
		<span className="font-sans font-semibold md:text-lg text-green-500 mr-4">
			{title}
		</span>
		<span className="bg-green-500 block h-1 w-16"></span>
	</Link>
)
