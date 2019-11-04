import React from 'react'
import { Link } from 'gatsby'

export default ({ title, to }) => (
	<Link
		className="px-5 py-4 border-4 border-green-500 inline-flex items-center"
		to={to}
	>
		<span className="font-sans font-semibold text-lg text-green-500 mr-4">
			{title}
		</span>
		<span className="bg-green-500 block h-1 w-16"></span>
	</Link>
)
