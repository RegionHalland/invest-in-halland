import React from 'react'
import { Link } from 'gatsby'
import { useNavigationItems } from '../hooks/useNavigationItems'

const Header = ({ siteTitle }) => {
	const { items: navigation } = useNavigationItems()
	return (
		<header>
			<h1>Invest in Halland</h1>
			<nav>
				{navigation.map(item => (
					<Link key={item.wordpress_id} to="/">
						{item.title}
					</Link>
				))}
			</nav>
		</header>
	)
}

export default Header
