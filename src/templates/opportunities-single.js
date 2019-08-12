import React from 'react'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'

export default ({
	data: {
		wordpressWpOpportunity: { title, content },
	},
}) => (
	<Layout>
		<SEO title={title} />
		<div>Opportunity {title}</div>
	</Layout>
)

export const query = graphql`
	query($slug: String!) {
		wordpressWpOpportunity(slug: { eq: $slug }) {
			title
			slug
			content
		}
	}
`
