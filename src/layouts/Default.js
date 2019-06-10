import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import '../css/index.css'

import Header from '../components/Header.js'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<div class="font-sans">
				<Header siteTitle={data.site.siteMetadata.title} />
				<main>{children}</main>
			</div>
		)}
	/>
)

export default Layout
