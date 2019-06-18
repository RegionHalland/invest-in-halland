import React from 'react'
import { Link } from 'gatsby'
import { useNavigationItems } from '../hooks/useNavigationItems'

export default ({ siteTitle }) => {
	const { items: navigation } = useNavigationItems()
	return (
		<header class="mb-6 p-3 border-b flex justify-between">
			<h1>Invest in Halland</h1>
			<nav>
				{navigation.map(item => (
					<Link key={item.wordpress_id} to="/" className="ml-3">
						{item.title}
					</Link>
				))}
				<Link to="/contact" className="ml-3">
					Kontakta oss
				</Link>
			</nav>
		</header>
	)
}
