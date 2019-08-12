import React from 'react'
import { Link } from 'gatsby'
import slugify from 'slugify'

import { useNavigationItems } from '../hooks/useNavigationItems'

export default ({ siteTitle }) => {
	const { items: navigation } = useNavigationItems()

	return (
		<header className="mb-6 p-3 border-b flex justify-between">
			<Link to="/">
				<h1>Invest in Halland</h1>
			</Link>
			<nav>
				{navigation.map(item => (
					<Link
						key={item.wordpress_id}
						to={`/${item.url
							.split('/')
							.filter(Boolean)
							.pop()}`}
						className="ml-3"
					>
						{item.title}
					</Link>
				))}
				<Link to="/kontakt" className="ml-3">
					Kontakta oss
				</Link>
			</nav>
		</header>
	)
}
