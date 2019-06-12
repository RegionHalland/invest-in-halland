import React from 'react'
import { Link } from 'gatsby'

import SearchInput from '../components/SearchInput'
import Layout from '../layouts/Default'
import SEO from '../components/seo'

const IndexPage = () => (
	<Layout>
		<div className="w-1/2">
			<SearchInput
				classes={'mb-4'}
				placeholder={'Sök efter person'}
				disabled={false}
			/>
		</div>
		<SEO title="Home" />
		<h1 className="text-5xl">Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
)

export default IndexPage
